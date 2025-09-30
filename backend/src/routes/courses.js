import express from 'express';
import {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollInCourse,
  dropCourse,
} from '../controllers/courses.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getCourses)
  .post(protect, authorize('admin', 'instructor'), createCourse);

router.route('/:id')
  .get(getCourse)
  .put(protect, authorize('admin', 'instructor'), updateCourse)
  .delete(protect, authorize('admin'), deleteCourse);

router.put('/:id/enroll', protect, enrollInCourse);
router.put('/:id/drop', protect, dropCourse);

export default router;