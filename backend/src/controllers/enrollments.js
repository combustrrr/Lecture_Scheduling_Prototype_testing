import Enrollment from '../models/Enrollment.js';
import LectureSlot from '../models/LectureSlot.js';
import User from '../models/User.js';

// Helper function to check for schedule conflicts
const checkScheduleConflicts = async (studentId, newSlot) => {
  // Get all enrolled slots for the student
  const enrolledSlots = await Enrollment.find({
    studentId,
    status: 'enrolled'
  }).populate('lectureSlotId');

  // Check for conflicts with the new slot
  for (const enrollment of enrolledSlots) {
    const existingSlot = enrollment.lectureSlotId;
    
    // Skip if not recurring or different day
    if (!existingSlot.isRecurring || !newSlot.isRecurring || 
        existingSlot.dayOfWeek !== newSlot.dayOfWeek) {
      continue;
    }

    // Check for time overlap
    const existingStart = existingSlot.startTime;
    const existingEnd = existingSlot.endTime;
    const newStart = newSlot.startTime;
    const newEnd = newSlot.endTime;

    // Convert time strings to minutes for comparison
    const timeToMinutes = (timeStr) => {
      const [hours, minutes] = timeStr.split(':').map(Number);
      return hours * 60 + minutes;
    };

    const existingStartMin = timeToMinutes(existingStart);
    const existingEndMin = timeToMinutes(existingEnd);
    const newStartMin = timeToMinutes(newStart);
    const newEndMin = timeToMinutes(newEnd);

    // Check for overlap
    if (newStartMin < existingEndMin && newEndMin > existingStartMin) {
      return {
        conflict: true,
        conflictingSlot: existingSlot
      };
    }
  }

  return { conflict: false };
};

// Helper function to promote waitlisted student
const promoteFromWaitlist = async (lectureSlotId) => {
  // Find the first waitlisted student (lowest position)
  const nextWaitlisted = await Enrollment.findOne({
    lectureSlotId,
    status: 'waitlisted'
  }).sort({ position: 1 });

  if (nextWaitlisted) {
    // Update status to enrolled
    nextWaitlisted.status = 'enrolled';
    await nextWaitlisted.save();

    // Update positions for remaining waitlisted students
    await Enrollment.updateMany(
      {
        lectureSlotId,
        status: 'waitlisted',
        position: { $gt: nextWaitlisted.position }
      },
      { $inc: { position: -1 } }
    );

    return nextWaitlisted;
  }

  return null;
};

// @desc    Enroll student in lecture slot
// @route   POST /api/enrollments/:slotId
// @access  Private (Students only)
export const enrollInSlot = async (req, res, next) => {
  try {
    const { slotId } = req.params;
    const studentId = req.user.id;

    // Check if lecture slot exists and is active
    const lectureSlot = await LectureSlot.findById(slotId);
    if (!lectureSlot || !lectureSlot.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Lecture slot not found or inactive'
      });
    }

    // Check if student is already enrolled or waitlisted
    const existingEnrollment = await Enrollment.findOne({
      lectureSlotId: slotId,
      studentId,
      status: { $in: ['enrolled', 'waitlisted'] }
    });

    if (existingEnrollment) {
      return res.status(400).json({
        success: false,
        message: `Already ${existingEnrollment.status} in this lecture slot`
      });
    }

    // Check for schedule conflicts
    const conflictCheck = await checkScheduleConflicts(studentId, lectureSlot);
    if (conflictCheck.conflict) {
      return res.status(400).json({
        success: false,
        message: `Schedule conflict with ${conflictCheck.conflictingSlot.subjectName} on ${
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][conflictCheck.conflictingSlot.dayOfWeek]
        } at ${conflictCheck.conflictingSlot.startTime}-${conflictCheck.conflictingSlot.endTime}`
      });
    }

    // Count current enrolled students
    const enrolledCount = await Enrollment.countDocuments({
      lectureSlotId: slotId,
      status: 'enrolled'
    });

    let enrollment;
    let message;

    if (enrolledCount < lectureSlot.capacity) {
      // Enroll directly
      enrollment = await Enrollment.create({
        lectureSlotId: slotId,
        studentId,
        status: 'enrolled'
      });
      message = 'Successfully enrolled in lecture slot';
    } else {
      // Add to waitlist
      const waitlistCount = await Enrollment.countDocuments({
        lectureSlotId: slotId,
        status: 'waitlisted'
      });

      enrollment = await Enrollment.create({
        lectureSlotId: slotId,
        studentId,
        status: 'waitlisted',
        position: waitlistCount + 1
      });
      message = `Lecture slot is full. Added to waitlist at position ${enrollment.position}`;
    }

    // Populate the enrollment with lecture slot and student details
    await enrollment.populate([
      { path: 'lectureSlotId', select: 'subjectName venue dayOfWeek startTime endTime' },
      { path: 'studentId', select: 'name email' }
    ]);

    res.status(201).json({
      success: true,
      message,
      data: enrollment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Drop enrollment from lecture slot
// @route   DELETE /api/enrollments/:slotId
// @access  Private (Students only)
export const dropEnrollment = async (req, res, next) => {
  try {
    const { slotId } = req.params;
    const studentId = req.user.id;

    // Find the enrollment
    const enrollment = await Enrollment.findOne({
      lectureSlotId: slotId,
      studentId,
      status: { $in: ['enrolled', 'waitlisted'] }
    });

    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: 'Enrollment not found'
      });
    }

    const wasEnrolled = enrollment.status === 'enrolled';
    const wasWaitlisted = enrollment.status === 'waitlisted';
    const waitlistPosition = enrollment.position;

    // Cancel the enrollment
    enrollment.status = 'cancelled';
    await enrollment.save();

    let promotedStudent = null;

    if (wasEnrolled) {
      // If student was enrolled, promote from waitlist
      promotedStudent = await promoteFromWaitlist(slotId);
    } else if (wasWaitlisted) {
      // If student was waitlisted, update positions for students behind them
      await Enrollment.updateMany(
        {
          lectureSlotId: slotId,
          status: 'waitlisted',
          position: { $gt: waitlistPosition }
        },
        { $inc: { position: -1 } }
      );
    }

    let message = 'Successfully dropped from lecture slot';
    if (promotedStudent) {
      await promotedStudent.populate('studentId', 'name email');
      message += `. ${promotedStudent.studentId.name} has been promoted from waitlist`;
    }

    res.status(200).json({
      success: true,
      message,
      data: {
        droppedEnrollment: enrollment,
        promotedStudent
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get student's timetable
// @route   GET /api/enrollments/me
// @access  Private (Students only)
export const getMyTimetable = async (req, res, next) => {
  try {
    const studentId = req.user.id;
    const { status = 'enrolled,waitlisted' } = req.query;

    const statusArray = status.split(',');

    const enrollments = await Enrollment.find({
      studentId,
      status: { $in: statusArray }
    })
    .populate({
      path: 'lectureSlotId',
      select: 'subjectName venue dayOfWeek startTime endTime description capacity',
      populate: {
        path: 'facultyId',
        select: 'name email'
      }
    })
    .sort({ 'lectureSlotId.dayOfWeek': 1, 'lectureSlotId.startTime': 1 });

    // Group by day for better organization
    const timetable = {};
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    enrollments.forEach(enrollment => {
      if (enrollment.lectureSlotId) {
        const dayName = days[enrollment.lectureSlotId.dayOfWeek];
        if (!timetable[dayName]) {
          timetable[dayName] = [];
        }
        timetable[dayName].push(enrollment);
      }
    });

    res.status(200).json({
      success: true,
      count: enrollments.length,
      data: {
        enrollments,
        timetable
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all enrollments (Admin only)
// @route   GET /api/enrollments
// @access  Private (Admin only)
export const getAllEnrollments = async (req, res, next) => {
  try {
    const {
      status,
      lectureSlotId,
      studentId,
      page = 1,
      limit = 20
    } = req.query;

    // Build filter object
    const filter = {};
    if (status) filter.status = { $in: status.split(',') };
    if (lectureSlotId) filter.lectureSlotId = lectureSlotId;
    if (studentId) filter.studentId = studentId;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const enrollments = await Enrollment.find(filter)
      .populate({
        path: 'lectureSlotId',
        select: 'subjectName venue dayOfWeek startTime endTime',
        populate: {
          path: 'facultyId',
          select: 'name email'
        }
      })
      .populate('studentId', 'name email meta.studentId')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Enrollment.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: enrollments.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      data: enrollments
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Force cancel enrollment (Admin only)
// @route   PUT /api/enrollments/:id/cancel
// @access  Private (Admin only)
export const forceCancel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    const enrollment = await Enrollment.findById(id);
    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: 'Enrollment not found'
      });
    }

    if (enrollment.status === 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'Enrollment is already cancelled'
      });
    }

    const wasEnrolled = enrollment.status === 'enrolled';
    const wasWaitlisted = enrollment.status === 'waitlisted';
    const waitlistPosition = enrollment.position;

    // Cancel the enrollment
    enrollment.status = 'cancelled';
    if (reason) {
      enrollment.cancelReason = reason;
    }
    await enrollment.save();

    let promotedStudent = null;

    if (wasEnrolled) {
      // If student was enrolled, promote from waitlist
      promotedStudent = await promoteFromWaitlist(enrollment.lectureSlotId);
    } else if (wasWaitlisted) {
      // If student was waitlisted, update positions for students behind them
      await Enrollment.updateMany(
        {
          lectureSlotId: enrollment.lectureSlotId,
          status: 'waitlisted',
          position: { $gt: waitlistPosition }
        },
        { $inc: { position: -1 } }
      );
    }

    await enrollment.populate([
      {
        path: 'lectureSlotId',
        select: 'subjectName venue dayOfWeek startTime endTime'
      },
      {
        path: 'studentId',
        select: 'name email'
      }
    ]);

    let message = 'Enrollment cancelled successfully';
    if (promotedStudent) {
      await promotedStudent.populate('studentId', 'name email');
      message += `. ${promotedStudent.studentId.name} has been promoted from waitlist`;
    }

    res.status(200).json({
      success: true,
      message,
      data: {
        cancelledEnrollment: enrollment,
        promotedStudent
      }
    });
  } catch (error) {
    next(error);
  }
};