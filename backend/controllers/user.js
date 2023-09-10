import { User } from "../models/user.js";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
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

  // const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  // console.log(token);

  // res
  //   .status(200)
  //   .cookie("token", token, {
  //     httpOnly: true,
  //     maxAge: 15 * 60 * 1000,
  //   })
  //   .json({
  //     success: true,
  //     message: `User ${name} successfully registered`,
  //     user: user,
  //   });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
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
