import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";

export const register = async (req, res, next) => {
  const { name, email, password, phone } = req.body;

  let user = await User.findOne({ email: email });

  if (user)
    return res.status(404).json({
      success: false,
      message: `User ${name} already registered/exists`,
    });

  const hasPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name: name,
    email: email,
    password: hasPassword,
    phone: phone,
  });

  sendCookie(user, res, `User ${name} successfully registered`, 201);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })
    .select("+password")
    .maxTimeMS(20000);
  if (!user) {
    res
      .status(404)
      .json({ message: "invalid email or password", success: false });
  }
  /* The line `const isMatch = await bcrypt.compare(password, user.password);` is comparing the
  provided password with the hashed password stored in the user object. */
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    res
      .status(404)
      .json({ success: false, message: "invalid email or password" });
  }
  sendCookie(user, res, `Welcome back, ${user.name}`, 200);
};

export const getMyProfile = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed. Please log in first.",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }
    res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    // } catch (error) {
    //   if (error instanceof jwt.JsonWebTokenError) {
    //     console.error("JWT error:", error.message);
    //   } else {
    //     console.error("Error:", error.message);
    //   }
    console.error("Error:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching user data.",
    });
  }
};
