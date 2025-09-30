import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Schedule must belong to a user'],
  },
  name: {
    type: String,
    required: [true, 'Please add a schedule name'],
    maxlength: [50, 'Schedule name cannot be more than 50 characters'],
  },
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
  courses: [{
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course',
      required: true,
    },
    status: {
      type: String,
      enum: ['enrolled', 'waitlisted', 'dropped', 'completed'],
      default: 'enrolled',
    },
    grade: {
      type: String,
      enum: ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F', 'W', 'I'],
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },
  }],
  totalCredits: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  notes: {
    type: String,
    maxlength: [200, 'Notes cannot be more than 200 characters'],
  },
}, {
  timestamps: true,
});

// Index for better query performance
scheduleSchema.index({ user: 1, semester: 1, year: 1 });

// Calculate total credits before saving
scheduleSchema.pre('save', async function(next) {
  if (this.isModified('courses')) {
    await this.populate('courses.course');
    this.totalCredits = this.courses.reduce((total, courseItem) => {
      if (courseItem.status === 'enrolled' || courseItem.status === 'completed') {
        return total + (courseItem.course.credits || 0);
      }
      return total;
    }, 0);
  }
  next();
});

export default mongoose.model('Schedule', scheduleSchema);