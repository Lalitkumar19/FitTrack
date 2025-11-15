import Meal from '../models/Meal.js';

// @desc Get all meals of a user
// @route GET /api/meals
export const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find({ user: req.user.id });
    res.json(meals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Add new meal
// @route POST /api/meals
export const addMeal = async (req, res) => {
  const { name, calories } = req.body;
  try {
    const newMeal = new Meal({
      user: req.user.id,
      name,
      calories,
    });
    const savedMeal = await newMeal.save();
    res.status(201).json(savedMeal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Update meal
// @route PUT /api/meals/:id
export const updateMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal) return res.status(404).json({ message: 'Meal not found' });
    if (meal.user.toString() !== req.user.id)
      return res.status(401).json({ message: 'Not authorized' });

    const updated = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Delete meal
// @route DELETE /api/meals/:id
export const deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal) return res.status(404).json({ message: 'Meal not found' });
    if (meal.user.toString() !== req.user.id)
      return res.status(401).json({ message: 'Not authorized' });

    await meal.deleteOne();
    res.json({ message: 'Meal removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
