// backend/routes/userRoutes.js
import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = express.Router();

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// 🧩 Register route
router.post("/register", async (req, res) => {
  try {
    console.log("📩 Incoming Register Request Body:", req.body);

    const { name, email, password } = req.body;

    // Validate
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Existing user
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Mongoose will hash password automatically (pre-save)
    const user = await User.create({ name, email, password });

    console.log("✅ User registered successfully:", user.email);

    res.status(201).json({
      message: "User registered successfully",
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error("❌ Registration error:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// 🧠 Login route
router.post("/login", async (req, res) => {
  try {
    console.log("📩 Incoming Login Request Body:", req.body);

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("⚠️ Password mismatch for email:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("✅ Login successful for:", email);

    res.json({
      message: "Login successful",
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ message: err.message });
  }
});

export default router;
