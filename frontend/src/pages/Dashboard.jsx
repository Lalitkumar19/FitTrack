import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { Dumbbell, Salad, Target, Flame, HeartPulse, Footprints } from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  if (!user) return null;

  const cards = [
    {
      title: "Workouts",
      desc: "Track & crush your fitness sessions",
      icon: <Dumbbell size={28} />,
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "Meals",
      desc: "Log meals & keep nutrition balanced",
      icon: <Salad size={28} />,
      gradient: "from-green-400 to-lime-400",
    },
    {
      title: "Goals",
      desc: "Set targets and track progress",
      icon: <Target size={28} />,
      gradient: "from-pink-500 to-purple-600",
    },
  ];

  const stats = [
    { label: "Calories", value: "1,125 kcal", icon: <Flame className="text-orange-400" size={20} /> },
    { label: "Heart Rate", value: "105 bpm", icon: <HeartPulse className="text-pink-500" size={20} /> },
    { label: "Steps", value: "10,450", icon: <Footprints className="text-green-400" size={20} /> },
  ];

  return (
    <div className="min-h-screen relative flex text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 bg-[length:400%_400%] animate-gradient-x bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600"></div>
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex-1 ml-0 md:ml-64 px-6 py-10"
      >
        {/* Welcome Section */}
        <section className="mb-10">
          <div className="glass p-8 md:p-10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            <h1 className="text-4xl font-extrabold mb-2">
              Welcome back,{" "}
              <span className="text-yellow-300 drop-shadow-glow">
                {user?.name || user?.email?.split("@")[0]}
              </span>{" "}
              👋
            </h1>
            <p className="text-white/80 text-lg mb-6">
              Keep pushing forward! Here's your fitness snapshot for today 💪
            </p>

            <div className="flex flex-wrap gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-between w-60 p-5 bg-white/10 rounded-2xl shadow-inner backdrop-blur-md"
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-white/70">{stat.label}</span>
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  {stat.icon}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <button
                onClick={() => navigate("/progress")}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold shadow-lg hover:scale-105 transition"
              >
                View Progress
              </button>
              <button
                onClick={logout}
                className="px-6 py-2 rounded-lg border border-white/30 text-white bg-white/10 hover:bg-white/20 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.article
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`relative p-6 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.2)] bg-gradient-to-br ${c.gradient} hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-full">{c.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{c.title}</h3>
                  <p className="text-white/90 mt-1">{c.desc}</p>
                </div>
              </div>

              <div className="mt-5 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-2 bg-white/70 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${60 + i * 10}%` }}
                  transition={{ duration: 1 }}
                />
              </div>

              <div className="mt-5 flex gap-3">
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 hover:bg-white/20 transition">
                  Open
                </button>
                <button className="px-4 py-2 rounded-md bg-white/20 font-semibold hover:bg-white/30 transition">
                  Start
                </button>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Motivational Quote */}
        <section className="mt-16 text-center">
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="italic text-lg text-white/90 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
          >
            “Small steps every day become big results.” 🌟
          </motion.p>
        </section>
      </motion.main>
    </div>
  );
};

export default Dashboard;
