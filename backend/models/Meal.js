const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  calories: { type: Number, required: true },
  date: { type: String, required: true }, // YYYY-MM-DD
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Meal', mealSchema);
