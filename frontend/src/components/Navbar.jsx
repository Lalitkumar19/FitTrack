// frontend/src/components/Navbar.jsx
import React, { useState } from "react";
import {
  Dumbbell,
  Bell,
  User,
  Menu,
  Sun,
  Moon,
  X,
  LogOut,
  Settings,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { logout, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Goals", path: "/goals" },
    { name: "Workouts", path: "/workouts" },
    { name: "Meals", path: "/meals" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        darkMode
          ? "bg-gray-900/70 backdrop-blur-lg text-white"
          : "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white"
      } shadow-xl`}
    >
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left Section – Logo */}
        <div className="flex items-center space-x-2">
          <Dumbbell className="w-7 h-7 animate-spin-slow" />
          <h1 className="text-2xl font-bold tracking-wide hover:scale-105 transition">
            FitTrack
          </h1>
        </div>

        {/* Middle – Nav Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold transition relative ${
                location.pathname === link.path
                  ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white"
                  : "hover:text-yellow-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section – Icons */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notifications */}
          <div className="relative">
            <Bell className="w-6 h-6 cursor-pointer hover:text-yellow-200 transition" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          {/* User Avatar Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition flex items-center"
            >
              <User size={20} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white/90 backdrop-blur-md text-gray-800 rounded-xl shadow-lg p-2 animate-fadeIn">
                <p className="px-3 py-2 font-semibold border-b">
                  Hi, {user?.name || "User"} 👋
                </p>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded-md"
                >
                  <Settings size={16} /> Settings
                </Link>
                <button
                  onClick={logout}
                  className="flex w-full items-center gap-2 px-3 py-2 hover:bg-red-100 text-red-600 rounded-md"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg flex flex-col items-center py-4 space-y-3 animate-slideDown">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-semibold ${
                location.pathname === link.path
                  ? "text-yellow-200 underline"
                  : "text-white hover:text-yellow-200"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Motivational Tagline */}
      <div className="text-center text-sm py-1 bg-white/10 tracking-wide">
        “Train Hard, Stay Consistent 💥”
      </div>
    </nav>
  );
};

export default Navbar;


