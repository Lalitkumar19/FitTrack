const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  date: { type: String, required: true },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);
