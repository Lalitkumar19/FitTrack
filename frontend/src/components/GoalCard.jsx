import React from "react";
import { motion } from "framer-motion";

const GoalCard = ({ goal, progress }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.07, rotate: 1 }}
      className="p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg border border-white/30 transition-all"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-3">{goal}</h2>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700 font-medium">{progress}% completed</p>
    </motion.div>
  );
};

export default GoalCard;
