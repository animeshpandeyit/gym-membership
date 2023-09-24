import express from "express";
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
router.get("/me", getMyProfile);
router.get("/logout", logout);
// router.post("/profile", verifyToken, (req, res) => {
//   jwt.verify(res.token, process.env.JWT_SECRET, (err, authData) => {
//     if (err) {
//       res.send({
//         result: "Invalid token",
//       });
//     } else {
//       res.json({
//         message: "Profile accepted",
//         authData,
//       });
//     }
//   });
// });

export default router;
