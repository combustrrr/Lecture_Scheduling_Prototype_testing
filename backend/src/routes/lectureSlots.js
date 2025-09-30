import express from 'express';
import {
  getLectureSlots,
  getLectureSlot,
  createLectureSlot,
  updateLectureSlot,
  deleteLectureSlot
} from '../controllers/lectureSlots.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getLectureSlots);
router.get('/:id', getLectureSlot);

// Faculty/Admin routes
router.post('/', protect, authorize('faculty', 'admin'), createLectureSlot);
router.put('/:id', protect, authorize('faculty', 'admin'), updateLectureSlot);
router.delete('/:id', protect, authorize('faculty', 'admin'), deleteLectureSlot);

export default router;