import express from 'express';
import {
  getFacultyLectureSlots,
  createLectureSlot,
  updateLectureSlot,
  deleteLectureSlot
} from '../controllers/faculty.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All routes require faculty authentication
router.use(protect);
router.use(authorize('faculty', 'admin'));

// Faculty lecture slot routes
router.route('/lecture-slots')
  .get(getFacultyLectureSlots)
  .post(createLectureSlot);

router.route('/lecture-slots/:id')
  .put(updateLectureSlot)
  .delete(deleteLectureSlot);

export default router;