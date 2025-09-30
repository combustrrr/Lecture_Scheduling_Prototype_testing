import express from 'express';
import {
  getSchedules,
  getSchedule,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} from '../controllers/schedules.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(protect, getSchedules)
  .post(protect, createSchedule);

router.route('/:id')
  .get(protect, getSchedule)
  .put(protect, updateSchedule)
  .delete(protect, deleteSchedule);

export default router;