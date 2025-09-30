import LectureSlot from '../models/LectureSlot.js';
import Enrollment from '../models/Enrollment.js';

// Helper function to check for faculty schedule conflicts
const checkFacultyConflicts = async (facultyId, dayOfWeek, startTime, endTime, excludeId = null) => {
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);

  // Find all active slots for the same faculty and day
  const query = {
    facultyId,
    dayOfWeek,
    isActive: true,
    recurring: true,
  };

  if (excludeId) {
    query._id = { $ne: excludeId };
  }

  const existingSlots = await LectureSlot.find(query);

  // Check for time conflicts
  for (const slot of existingSlots) {
    const existingStartMinutes = timeToMinutes(slot.startTime);
    const existingEndMinutes = timeToMinutes(slot.endTime);

    // Check for overlap
    if (startMinutes < existingEndMinutes && endMinutes > existingStartMinutes) {
      return {
        conflict: true,
        conflictingSlot: slot
      };
    }
  }

  return { conflict: false };
};

// @desc    Get all lecture slots for faculty
// @route   GET /api/faculty/lecture-slots
// @access  Private (Faculty only)
export const getFacultyLectureSlots = async (req, res, next) => {
  try {
    const facultyId = req.user.id;

    const lectureSlots = await LectureSlot.find({ 
      facultyId, 
      isActive: true 
    })
    .populate('facultyId', 'name email meta.department')
    .sort({ dayOfWeek: 1, startTime: 1 });

    // Get enrollment data for each slot
    const slotsWithEnrollments = await Promise.all(
      lectureSlots.map(async (slot) => {
        const enrollments = await Enrollment.find({
          lectureSlotId: slot._id,
          status: { $in: ['enrolled', 'waitlisted'] }
        })
        .populate('studentId', 'name email meta.studentId')
        .sort({ status: 1, position: 1 });

        const enrolled = enrollments.filter(e => e.status === 'enrolled');
        const waitlisted = enrollments.filter(e => e.status === 'waitlisted');

        return {
          ...slot.toObject(),
          enrollments: {
            enrolled,
            waitlisted,
            totalEnrolled: enrolled.length,
            totalWaitlisted: waitlisted.length
          }
        };
      })
    );

    res.status(200).json({
      success: true,
      count: slotsWithEnrollments.length,
      data: slotsWithEnrollments
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new lecture slot
// @route   POST /api/faculty/lecture-slots
// @access  Private (Faculty only)
export const createLectureSlot = async (req, res, next) => {
  try {
    const facultyId = req.user.id;
    const { venue, dayOfWeek, startTime, endTime } = req.body;

    // Validate required fields
    if (!req.body.subjectName || !venue || dayOfWeek === undefined || !startTime || !endTime) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: subjectName, venue, dayOfWeek, startTime, endTime'
      });
    }

    // Validate day of week
    if (dayOfWeek < 0 || dayOfWeek > 6) {
      return res.status(400).json({
        success: false,
        message: 'Day of week must be between 0 (Sunday) and 6 (Saturday)'
      });
    }

    // Validate time format
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(startTime) || !timeRegex.test(endTime)) {
      return res.status(400).json({
        success: false,
        message: 'Time must be in HH:MM format'
      });
    }

    // Check for faculty schedule conflicts
    const conflictCheck = await checkFacultyConflicts(facultyId, dayOfWeek, startTime, endTime);
    if (conflictCheck.conflict) {
      return res.status(400).json({
        success: false,
        message: `Schedule conflict: You already have a class on ${
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek]
        } from ${conflictCheck.conflictingSlot.startTime} to ${conflictCheck.conflictingSlot.endTime} (${conflictCheck.conflictingSlot.subjectName})`
      });
    }

    // Check for venue conflicts
    const venueConflictCheck = await checkVenueConflicts(venue, dayOfWeek, startTime, endTime);
    if (venueConflictCheck.conflict) {
      return res.status(400).json({
        success: false,
        message: `Venue conflict: ${venue} is already booked on ${
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek]
        } from ${venueConflictCheck.conflictingSlot.startTime} to ${venueConflictCheck.conflictingSlot.endTime}`
      });
    }

    // Set faculty ID and create the slot
    const lectureSlotData = {
      ...req.body,
      facultyId,
      recurring: req.body.isRecurring !== false // Default to true
    };

    const lectureSlot = await LectureSlot.create(lectureSlotData);

    // Populate the created slot
    await lectureSlot.populate('facultyId', 'name email meta.department');

    res.status(201).json({
      success: true,
      message: 'Lecture slot created successfully',
      data: lectureSlot
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update lecture slot
// @route   PUT /api/faculty/lecture-slots/:id
// @access  Private (Faculty only)
export const updateLectureSlot = async (req, res, next) => {
  try {
    const facultyId = req.user.id;
    const { id } = req.params;

    let lectureSlot = await LectureSlot.findById(id);

    if (!lectureSlot || !lectureSlot.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Lecture slot not found'
      });
    }

    // Check if faculty owns this slot
    if (lectureSlot.facultyId.toString() !== facultyId) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this lecture slot'
      });
    }

    // Check for conflicts if schedule details are being updated
    const { venue, dayOfWeek, startTime, endTime } = req.body;
    if (venue || dayOfWeek !== undefined || startTime || endTime) {
      const checkVenue = venue || lectureSlot.venue;
      const checkDay = dayOfWeek !== undefined ? dayOfWeek : lectureSlot.dayOfWeek;
      const checkStartTime = startTime || lectureSlot.startTime;
      const checkEndTime = endTime || lectureSlot.endTime;

      // Validate time format if provided
      const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
      if (startTime && !timeRegex.test(startTime)) {
        return res.status(400).json({
          success: false,
          message: 'Start time must be in HH:MM format'
        });
      }
      if (endTime && !timeRegex.test(endTime)) {
        return res.status(400).json({
          success: false,
          message: 'End time must be in HH:MM format'
        });
      }

      // Check for faculty schedule conflicts
      const facultyConflictCheck = await checkFacultyConflicts(
        facultyId, 
        checkDay, 
        checkStartTime, 
        checkEndTime, 
        lectureSlot._id
      );

      if (facultyConflictCheck.conflict) {
        return res.status(400).json({
          success: false,
          message: `Schedule conflict: You already have a class on ${
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][checkDay]
          } from ${facultyConflictCheck.conflictingSlot.startTime} to ${facultyConflictCheck.conflictingSlot.endTime} (${facultyConflictCheck.conflictingSlot.subjectName})`
        });
      }

      // Check for venue conflicts
      const venueConflictCheck = await checkVenueConflicts(
        checkVenue, 
        checkDay, 
        checkStartTime, 
        checkEndTime, 
        lectureSlot._id
      );

      if (venueConflictCheck.conflict) {
        return res.status(400).json({
          success: false,
          message: `Venue conflict: ${checkVenue} is already booked on ${
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][checkDay]
          } from ${venueConflictCheck.conflictingSlot.startTime} to ${venueConflictCheck.conflictingSlot.endTime}`
        });
      }
    }

    // Update the slot
    const updateData = { ...req.body };
    if (req.body.isRecurring !== undefined) {
      updateData.recurring = req.body.isRecurring;
    }

    lectureSlot = await LectureSlot.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    ).populate('facultyId', 'name email meta.department');

    res.status(200).json({
      success: true,
      message: 'Lecture slot updated successfully',
      data: lectureSlot
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete lecture slot
// @route   DELETE /api/faculty/lecture-slots/:id
// @access  Private (Faculty only)
export const deleteLectureSlot = async (req, res, next) => {
  try {
    const facultyId = req.user.id;
    const { id } = req.params;

    const lectureSlot = await LectureSlot.findById(id);

    if (!lectureSlot || !lectureSlot.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Lecture slot not found'
      });
    }

    // Check if faculty owns this slot
    if (lectureSlot.facultyId.toString() !== facultyId) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this lecture slot'
      });
    }

    // Check if there are enrolled students
    const enrolledCount = await Enrollment.countDocuments({
      lectureSlotId: id,
      status: { $in: ['enrolled', 'waitlisted'] }
    });

    if (enrolledCount > 0) {
      return res.status(400).json({
        success: false,
        message: `Cannot delete lecture slot with ${enrolledCount} enrolled/waitlisted students. Please contact admin to handle student transfers.`
      });
    }

    // Soft delete
    lectureSlot.isActive = false;
    await lectureSlot.save();

    res.status(200).json({
      success: true,
      message: 'Lecture slot deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Helper function to check venue conflicts (reused from lectureSlots controller)
const checkVenueConflicts = async (venue, dayOfWeek, startTime, endTime, excludeId = null) => {
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);

  const query = {
    venue,
    dayOfWeek,
    isActive: true,
    recurring: true,
  };

  if (excludeId) {
    query._id = { $ne: excludeId };
  }

  const existingSlots = await LectureSlot.find(query);

  for (const slot of existingSlots) {
    const existingStartMinutes = timeToMinutes(slot.startTime);
    const existingEndMinutes = timeToMinutes(slot.endTime);

    if (startMinutes < existingEndMinutes && endMinutes > existingStartMinutes) {
      return {
        conflict: true,
        conflictingSlot: slot
      };
    }
  }

  return { conflict: false };
};