import Goal from '../models/Goal.js';

// @desc Get all goals
// @route GET /api/goals
export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Add new goal
// @route POST /api/goals
export const addGoal = async (req, res) => {
  const { title, target, progress } = req.body;
  try {
    const newGoal = new Goal({
      user: req.user.id,
      title,
      target,
      progress,
    });
    const savedGoal = await newGoal.save();
    res.status(201).json(savedGoal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Update goal
// @route PUT /api/goals/:id
export const updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) return res.status(404).json({ message: 'Goal not found' });
    if (goal.user.toString() !== req.user.id)
      return res.status(401).json({ message: 'Not authorized' });

    const updated = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Delete goal
// @route DELETE /api/goals/:id
export const deleteGoal = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) return res.status(404).json({ message: 'Goal not found' });
    if (goal.user.toString() !== req.user.id)
      return res.status(401).json({ message: 'Not authorized' });

    await goal.deleteOne();
    res.json({ message: 'Goal removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
