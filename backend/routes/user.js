import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  login,
  register,
  getMyProfile,
  logout,
  //   verifyToken,
} from "../controllers/user.js";
const router = express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", logout);

export default router;
