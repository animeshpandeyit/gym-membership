import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(404).json({
      success: false,
      message: "Login First",
    });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  /* The line `req.user = await User.findById(decoded._id);` is retrieving the user information from
  the database based on the decoded user ID from the JWT token. */
  req.user = await User.findById(decoded._id);
  next();
};
