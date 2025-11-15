import Workout from '../models/Workout.js';

// @desc Get all workouts
// @route GET /api/workouts
export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Add new workout
// @route POST /api/workouts
export const addWorkout = async (req, res) => {
  const { name, duration, caloriesBurned } = req.body;
  try {
    const newWorkout = new Workout({
      user: req.user.id,
      name,
      duration,
      caloriesBurned,
    });
    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Update workout
// @route PUT /api/workouts/:id
export const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) return res.status(404).json({ message: 'Workout not found' });
    if (workout.user.toString() !== req.user.id)
      return res.status(401).json({ message: 'Not authorized' });

    const updated = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Delete workout
// @route DELETE /api/workouts/:id
export const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) return res.status(404).json({ message: 'Workout not found' });
    if (workout.user.toString() !== req.user.id)
      return res.status(401).json({ message: 'Not authorized' });

    await workout.deleteOne();
    res.json({ message: 'Workout removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
