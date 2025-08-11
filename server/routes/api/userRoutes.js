import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
  authUser,
  getProfile
} from "../../controllers/authController.js";
import { protect } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Auth routes
router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/auth-check", authUser);

// User profile
router.get("/profile", protect, getProfile);

export default router;
