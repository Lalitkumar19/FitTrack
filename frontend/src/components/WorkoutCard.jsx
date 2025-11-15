import React from "react";
import { motion } from "framer-motion";

const WorkoutCard = ({ workout, duration, intensity }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 25px rgba(255,100,50,0.4)",
      }}
      className="p-6 rounded-2xl shadow-lg text-white bg-gradient-to-r from-orange-500 via-red-500 to-orange-600"
    >
      <h2 className="text-xl font-semibold mb-2">{workout}</h2>
      <p className="text-sm opacity-90">⏱ Duration: {duration}</p>
      <p className="text-sm opacity-90">🔥 Intensity: {intensity}</p>
    </motion.div>
  );
};

export default WorkoutCard;
