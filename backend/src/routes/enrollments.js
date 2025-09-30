import express from 'express';
import {
  enrollInSlot,
  dropEnrollment,
  getMyTimetable,
  getAllEnrollments,
  forceCancel
} from '../controllers/enrollments.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Student routes
router.post('/:slotId', protect, authorize('student'), enrollInSlot);
router.delete('/:slotId', protect, authorize('student'), dropEnrollment);
router.get('/me', protect, authorize('student'), getMyTimetable);

// Admin routes
router.get('/', protect, authorize('admin'), getAllEnrollments);
router.put('/:id/cancel', protect, authorize('admin'), forceCancel);

export default router;