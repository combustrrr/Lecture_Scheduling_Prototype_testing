import LectureSlot from '../models/LectureSlot.js';
import Enrollment from '../models/Enrollment.js';
import User from '../models/User.js';

// Helper function to check for venue conflicts
const checkVenueConflicts = async (venue, dayOfWeek, startTime, endTime, excludeId = null) => {
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);

  // Find all active slots for the same venue and day
  const query = {
    venue,
    dayOfWeek,
    isActive: true,
    isRecurring: true,
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

// @desc    Get all lecture slots with enrollment counts
// @route   GET /api/lecture-slots
// @access  Public
export const getLectureSlots = async (req, res, next) => {
  try {
    const {
      subject,
      faculty,
      day,
      venue,
      page = 1,
      limit = 20
    } = req.query;

    // Build filter object
    const filter = { isActive: true };
    
    if (subject) {
      filter.subjectName = { $regex: subject, $options: 'i' };
    }
    
    if (faculty) {
      filter.facultyId = faculty;
    }
    
    if (day !== undefined) {
      filter.dayOfWeek = parseInt(day);
    }
    
    if (venue) {
      filter.venue = { $regex: venue, $options: 'i' };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const lectureSlots = await LectureSlot.find(filter)
      .populate('facultyId', 'name email meta.department')
      .sort({ dayOfWeek: 1, startTime: 1 })
      .skip(skip)
      .limit(parseInt(limit));

    // Get enrollment counts for each slot
    const slotsWithCounts = await Promise.all(
      lectureSlots.map(async (slot) => {
        const enrolledCount = await Enrollment.countDocuments({
          lectureSlotId: slot._id,
          status: 'enrolled'
        });

        const waitlistedCount = await Enrollment.countDocuments({
          lectureSlotId: slot._id,
          status: 'waitlisted'
        });

        return {
          ...slot.toObject(),
          enrolledCount,
          waitlistedCount,
          availableSpots: slot.capacity - enrolledCount,
          isFull: enrolledCount >= slot.capacity
        };
      })
    );

    const total = await LectureSlot.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: slotsWithCounts.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      data: slotsWithCounts
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single lecture slot with enrollment details
// @route   GET /api/lecture-slots/:id
// @access  Public
export const getLectureSlot = async (req, res, next) => {
  try {
    const lectureSlot = await LectureSlot.findById(req.params.id)
      .populate('facultyId', 'name email meta.department');

    if (!lectureSlot || !lectureSlot.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Lecture slot not found'
      });
    }

    // Get enrollment details
    const enrollments = await Enrollment.find({
      lectureSlotId: req.params.id,
      status: { $in: ['enrolled', 'waitlisted'] }
    })
    .populate('studentId', 'name email meta.studentId')
    .sort({ status: 1, position: 1 });

    const enrolled = enrollments.filter(e => e.status === 'enrolled');
    const waitlisted = enrollments.filter(e => e.status === 'waitlisted');

    const slotWithEnrollments = {
      ...lectureSlot.toObject(),
      enrollments: {
        enrolled,
        waitlisted,
        enrolledCount: enrolled.length,
        waitlistedCount: waitlisted.length,
        availableSpots: lectureSlot.capacity - enrolled.length,
        isFull: enrolled.length >= lectureSlot.capacity
      }
    };

    res.status(200).json({
      success: true,
      data: slotWithEnrollments
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new lecture slot
// @route   POST /api/lecture-slots
// @access  Private (Faculty/Admin)
export const createLectureSlot = async (req, res, next) => {
  try {
    const { venue, dayOfWeek, startTime, endTime } = req.body;

    // Check for venue conflicts
    const conflictCheck = await checkVenueConflicts(venue, dayOfWeek, startTime, endTime);
    if (conflictCheck.conflict) {
      return res.status(400).json({
        success: false,
        message: `Venue conflict: ${venue} is already booked on ${
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek]
        } from ${conflictCheck.conflictingSlot.startTime} to ${conflictCheck.conflictingSlot.endTime}`
      });
    }

    // If user is faculty, set them as the faculty for this slot
    if (req.user.role === 'faculty') {
      req.body.facultyId = req.user.id;
    }

    const lectureSlot = await LectureSlot.create(req.body);

    // Populate the created slot
    await lectureSlot.populate('facultyId', 'name email meta.department');

    res.status(201).json({
      success: true,
      data: lectureSlot
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update lecture slot
// @route   PUT /api/lecture-slots/:id
// @access  Private (Faculty owner/Admin)
export const updateLectureSlot = async (req, res, next) => {
  try {
    let lectureSlot = await LectureSlot.findById(req.params.id);

    if (!lectureSlot || !lectureSlot.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Lecture slot not found'
      });
    }

    // Check if user is faculty and owns this slot, or is admin
    if (req.user.role === 'faculty' && lectureSlot.facultyId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this lecture slot'
      });
    }

    // Check for venue conflicts if venue, day, or time is being updated
    const { venue, dayOfWeek, startTime, endTime } = req.body;
    if (venue || dayOfWeek !== undefined || startTime || endTime) {
      const checkVenue = venue || lectureSlot.venue;
      const checkDay = dayOfWeek !== undefined ? dayOfWeek : lectureSlot.dayOfWeek;
      const checkStartTime = startTime || lectureSlot.startTime;
      const checkEndTime = endTime || lectureSlot.endTime;

      const conflictCheck = await checkVenueConflicts(
        checkVenue, 
        checkDay, 
        checkStartTime, 
        checkEndTime, 
        lectureSlot._id
      );

      if (conflictCheck.conflict) {
        return res.status(400).json({
          success: false,
          message: `Venue conflict: ${checkVenue} is already booked on ${
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][checkDay]
          } from ${conflictCheck.conflictingSlot.startTime} to ${conflictCheck.conflictingSlot.endTime}`
        });
      }
    }

    lectureSlot = await LectureSlot.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    ).populate('facultyId', 'name email meta.department');

    res.status(200).json({
      success: true,
      data: lectureSlot
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete lecture slot (soft delete)
// @route   DELETE /api/lecture-slots/:id
// @access  Private (Faculty owner/Admin)
export const deleteLectureSlot = async (req, res, next) => {
  try {
    const lectureSlot = await LectureSlot.findById(req.params.id);

    if (!lectureSlot || !lectureSlot.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Lecture slot not found'
      });
    }

    // Check if user is faculty and owns this slot, or is admin
    if (req.user.role === 'faculty' && lectureSlot.facultyId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this lecture slot'
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