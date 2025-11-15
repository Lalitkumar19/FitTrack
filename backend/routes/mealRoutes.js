import express from 'express';
import { getMeals, addMeal, updateMeal, deleteMeal } from '../controllers/mealController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getMeals)
  .post(protect, addMeal);

router.route('/:id')
  .put(protect, updateMeal)
  .delete(protect, deleteMeal);

export default router;
