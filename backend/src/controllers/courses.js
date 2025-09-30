import Course from '../models/Course.js';

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({ isActive: true })
      .populate('instructor', 'name email')
      .populate('enrolledStudents', 'name email');

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single course
// @route   GET /api/courses/:id
// @access  Public
export const getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'name email')
      .populate('enrolledStudents', 'name email')
      .populate('prerequisites', 'courseCode title');

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new course
// @route   POST /api/courses
// @access  Private (Admin/Instructor)
export const createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      success: true,
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private (Admin/Instructor)
export const updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private (Admin)
export const deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Course deactivated',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Enroll in course
// @route   PUT /api/courses/:id/enroll
// @access  Private
export const enrollInCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    // Check if already enrolled
    if (course.enrolledStudents.includes(req.user.id)) {
      return res.status(400).json({
        success: false,
        message: 'Already enrolled in this course',
      });
    }

    // Check if course is full
    if (course.enrolledStudents.length >= course.maxStudents) {
      return res.status(400).json({
        success: false,
        message: 'Course is full',
      });
    }

    course.enrolledStudents.push(req.user.id);
    await course.save();

    res.status(200).json({
      success: true,
      message: 'Successfully enrolled in course',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Drop course
// @route   PUT /api/courses/:id/drop
// @access  Private
export const dropCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    // Check if enrolled
    if (!course.enrolledStudents.includes(req.user.id)) {
      return res.status(400).json({
        success: false,
        message: 'Not enrolled in this course',
      });
    }

    course.enrolledStudents = course.enrolledStudents.filter(
      studentId => studentId.toString() !== req.user.id
    );
    await course.save();

    res.status(200).json({
      success: true,
      message: 'Successfully dropped course',
    });
  } catch (error) {
    next(error);
  }
};