import mongoose from 'mongoose';

const lectureSlotSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: [true, 'Subject name is required'],
    trim: true,
    maxlength: [100, 'Subject name cannot exceed 100 characters'],
  },
  facultyId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Faculty is required'],
  },
  venue: {
    type: String,
    required: [true, 'Venue is required'],
    trim: true,
    maxlength: [50, 'Venue cannot exceed 50 characters'],
  },
  capacity: {
    type: Number,
    required: [true, 'Capacity is required'],
    min: [1, 'Capacity must be at least 1'],
    max: [500, 'Capacity cannot exceed 500'],
  },
  dayOfWeek: {
    type: Number,
    required: [true, 'Day of week is required'],
    min: [0, 'Day of week must be between 0-6 (Sunday-Saturday)'],
    max: [6, 'Day of week must be between 0-6 (Sunday-Saturday)'],
  },
  startTime: {
    type: String,
    required: [true, 'Start time is required'],
    match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Start time must be in HH:MM format'],
  },
  endTime: {
    type: String,
    required: [true, 'End time is required'],
    match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'End time must be in HH:MM format'],
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot exceed 500 characters'],
    trim: true,
  },
  isRecurring: {
    type: Boolean,
    default: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Virtual for getting day name
lectureSlotSchema.virtual('dayName').get(function() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[this.dayOfWeek];
});

// Index for efficient queries
lectureSlotSchema.index({ facultyId: 1, dayOfWeek: 1, startTime: 1 });
lectureSlotSchema.index({ venue: 1, dayOfWeek: 1, startTime: 1 });
lectureSlotSchema.index({ subjectName: 1 });
lectureSlotSchema.index({ isActive: 1 });

// Validate that start time is before end time
lectureSlotSchema.pre('save', function(next) {
  if (this.startTime && this.endTime) {
    const [startHour, startMin] = this.startTime.split(':').map(Number);
    const [endHour, endMin] = this.endTime.split(':').map(Number);
    
    const startMinutes = startHour * 60 + startMin;
    const endMinutes = endHour * 60 + endMin;
    
    if (startMinutes >= endMinutes) {
      return next(new Error('Start time must be before end time'));
    }
  }
  next();
});

// Validate faculty exists and has appropriate role
lectureSlotSchema.pre('save', async function(next) {
  if (this.isModified('facultyId')) {
    const User = mongoose.model('User');
    const faculty = await User.findById(this.facultyId);
    
    if (!faculty) {
      return next(new Error('Faculty not found'));
    }
    
    if (!['faculty', 'admin'].includes(faculty.role)) {
      return next(new Error('Assigned user must be faculty or admin'));
    }
  }
  next();
});

export default mongoose.model('LectureSlot', lectureSlotSchema);