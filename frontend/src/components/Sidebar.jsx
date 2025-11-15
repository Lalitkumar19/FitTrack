import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Salad,
  Target,
  Activity,
  Home,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const { user, logout } = useAuth();

  const quotes = [
    "🏋️‍♂️ No Pain, No Gain",
    "🔥 Discipline > Motivation",
    "💪 Push harder than yesterday",
    "🏃‍♂️ Sweat is just fat crying",
    "🥗 Fuel your body, not your cravings",
  ];

  // Rotate motivational quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { icon: <Home size={22} />, label: "Dashboard" },
    { icon: <Target size={22} />, label: "Goals" },
    { icon: <Salad size={22} />, label: "Meals" },
    { icon: <Dumbbell size={22} />, label: "Workouts" },
    { icon: <Activity size={22} />, label: "Activity" },
  ];

  return (
    <motion.div
      initial={{ x: -120 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-screen text-white fixed left-0 top-0 flex flex-col justify-between shadow-xl
      bg-gradient-to-b from-orange-500 via-red-500 to-green-500 backdrop-blur-md transition-all duration-500`}
    >
      {/* Top section */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          {!collapsed && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-extrabold tracking-wide"
            >
              FitTrack
            </motion.h2>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 hover:bg-white/20 rounded-full transition"
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>

        {/* User Info */}
        {!collapsed && user && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-4 mb-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div>
                <p className="font-semibold text-lg">
                  Hi, {user.name || "User"} 👋
                </p>
                <p className="text-sm opacity-80">
                  Let’s crush your goals today!
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Menu Items */}
        <nav className="flex flex-col gap-2 px-2">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, x: 5 }}
              className="relative flex items-center gap-4 p-3 rounded-lg cursor-pointer
                hover:bg-white/20 transition-all duration-300"
            >
              {item.icon}
              {!collapsed && (
                <span className="font-medium tracking-wide">{item.label}</span>
              )}
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 space-y-4">
        {/* Motivational Quote */}
        {!collapsed && (
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="italic text-center text-sm bg-white/20 p-3 rounded-lg shadow-md"
          >
            {quotes[quoteIndex]}
          </motion.p>
        )}

        {/* Logout */}
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700
            text-white py-2 rounded-lg font-semibold shadow-md transition"
        >
          <LogOut size={18} />
          {!collapsed && "Logout"}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;


