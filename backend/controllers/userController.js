import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

// ========================== REGISTER USER ==========================
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("📩 Incoming Register Request Body:", req.body);

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log(`⚠️ User already exists: ${email}`);
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log(`✅ User registered successfully: ${email}`);

    res.status(201).json({
      message: "Registration successful!",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// ========================== LOGIN USER ==========================
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("📩 Incoming Login Request Body:", req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`❌ User not found: ${email}`);
      return res.status(404).json({ message: "User not found" });
    }

    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log(`⚠️ Password mismatch for email: ${email}`);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log(`✅ Login successful: ${email}`);
    res.status(200).json({
      message: "Login successful!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
