import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: [true, 'Please add a course code'],
    unique: true,
    uppercase: true,
    match: [/^[A-Z]{2,4}\d{3,4}$/, 'Please enter a valid course code (e.g., CS101)'],
  },
  title: {
    type: String,
    required: [true, 'Please add a course title'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  credits: {
    type: Number,
    required: [true, 'Please add credit hours'],
    min: [1, 'Credits must be at least 1'],
    max: [6, 'Credits cannot exceed 6'],
  },
  department: {
    type: String,
    required: [true, 'Please specify the department'],
    maxlength: [50, 'Department cannot be more than 50 characters'],
  },
  prerequisites: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
  }],
  semester: {
    type: String,
    enum: ['Fall', 'Spring', 'Summer'],
    required: [true, 'Please specify the semester'],
  },
  year: {
    type: Number,
    required: [true, 'Please specify the year'],
    min: [2020, 'Year must be 2020 or later'],
  },
  instructor: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: false,
  },
  maxStudents: {
    type: Number,
    default: 30,
    min: [1, 'Maximum students must be at least 1'],
  },
  enrolledStudents: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }],
  schedule: {
    days: [{
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    }],
    startTime: {
      type: String,
      match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter a valid time (HH:MM)'],
    },
    endTime: {
      type: String,
      match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter a valid time (HH:MM)'],
    },
    room: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Create index for better query performance
courseSchema.index({ courseCode: 1, semester: 1, year: 1 });
courseSchema.index({ department: 1 });

export default mongoose.model('Course', courseSchema);