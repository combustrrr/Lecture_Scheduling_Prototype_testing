import Schedule from '../models/Schedule.js';

// @desc    Get all schedules for user
// @route   GET /api/schedules
// @access  Private
export const getSchedules = async (req, res, next) => {
  try {
    const schedules = await Schedule.find({ user: req.user.id })
      .populate('courses.course', 'courseCode title credits schedule');

    res.status(200).json({
      success: true,
      count: schedules.length,
      data: schedules,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single schedule
// @route   GET /api/schedules/:id
// @access  Private
export const getSchedule = async (req, res, next) => {
  try {
    const schedule = await Schedule.findById(req.params.id)
      .populate('courses.course', 'courseCode title credits schedule instructor')
      .populate('courses.course.instructor', 'name email');

    if (!schedule) {
      return res.status(404).json({
        success: false,
        message: 'Schedule not found',
      });
    }

    // Check if schedule belongs to user
    if (schedule.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this schedule',
      });
    }

    res.status(200).json({
      success: true,
      data: schedule,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new schedule
// @route   POST /api/schedules
// @access  Private
export const createSchedule = async (req, res, next) => {
  try {
    req.body.user = req.user.id;

    const schedule = await Schedule.create(req.body);

    res.status(201).json({
      success: true,
      data: schedule,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update schedule
// @route   PUT /api/schedules/:id
// @access  Private
export const updateSchedule = async (req, res, next) => {
  try {
    let schedule = await Schedule.findById(req.params.id);

    if (!schedule) {
      return res.status(404).json({
        success: false,
        message: 'Schedule not found',
      });
    }

    // Check if schedule belongs to user
    if (schedule.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to update this schedule',
      });
    }

    schedule = await Schedule.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate('courses.course', 'courseCode title credits');

    res.status(200).json({
      success: true,
      data: schedule,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete schedule
// @route   DELETE /api/schedules/:id
// @access  Private
export const deleteSchedule = async (req, res, next) => {
  try {
    const schedule = await Schedule.findById(req.params.id);

    if (!schedule) {
      return res.status(404).json({
        success: false,
        message: 'Schedule not found',
      });
    }

    // Check if schedule belongs to user
    if (schedule.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this schedule',
      });
    }

    await schedule.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Schedule deleted',
    });
  } catch (error) {
    next(error);
  }
};