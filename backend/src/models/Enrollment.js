import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  lectureSlotId: {
    type: mongoose.Schema.ObjectId,
    ref: 'LectureSlot',
    required: [true, 'Lecture slot is required'],
  },
  studentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Student is required'],
  },
  status: {
    type: String,
    enum: ['enrolled', 'waitlisted', 'cancelled'],
    default: 'enrolled',
  },
  position: {
    type: Number,
    default: null,
    min: [1, 'Position must be at least 1'],
  },
  enrolledAt: {
    type: Date,
    default: null,
  },
  waitlistedAt: {
    type: Date,
    default: null,
  },
  cancelledAt: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true,
});

// Compound index to prevent duplicate enrollments
enrollmentSchema.index({ lectureSlotId: 1, studentId: 1 }, { unique: true });

// Index for efficient queries
enrollmentSchema.index({ studentId: 1, status: 1 });
enrollmentSchema.index({ lectureSlotId: 1, status: 1, position: 1 });

// Virtual for getting day name
enrollmentSchema.virtual('dayName').get(function() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return this.lectureSlot ? days[this.lectureSlot.dayOfWeek] : null;
});

// Set enrollment timestamp based on status
enrollmentSchema.pre('save', function(next) {
  if (this.isModified('status')) {
    const now = new Date();
    
    if (this.status === 'enrolled' && !this.enrolledAt) {
      this.enrolledAt = now;
      this.position = null; // Clear position when enrolled
    } else if (this.status === 'waitlisted' && !this.waitlistedAt) {
      this.waitlistedAt = now;
      this.enrolledAt = null; // Clear enrolled timestamp
    } else if (this.status === 'cancelled' && !this.cancelledAt) {
      this.cancelledAt = now;
      this.position = null; // Clear position when cancelled
    }
  }
  next();
});

export default mongoose.model('Enrollment', enrollmentSchema);