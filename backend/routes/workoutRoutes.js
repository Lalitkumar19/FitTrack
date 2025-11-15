import express from 'express';
import { getWorkouts, addWorkout, updateWorkout, deleteWorkout } from '../controllers/workoutController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getWorkouts)
  .post(protect, addWorkout);

router.route('/:id')
  .put(protect, updateWorkout)
  .delete(protect, deleteWorkout);

export default router;
