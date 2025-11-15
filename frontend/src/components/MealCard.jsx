import React from "react";
import { motion } from "framer-motion";

const MealCard = ({ meal, calories, healthy }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      className={`p-6 rounded-2xl shadow-lg transition-all bg-white/80 backdrop-blur-xl border-l-4 ${
        healthy ? "border-green-500" : "border-red-500"
      }`}
    >
      <h2 className="text-xl font-semibold text-gray-800">{meal}</h2>
      <p className="mt-2 text-gray-600">Calories: {calories}</p>
      <span
        className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-semibold ${
          healthy
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        {healthy ? "Healthy Meal" : "High Calorie"}
      </span>
    </motion.div>
  );
};

export default MealCard;
