import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getProfile } from "../controllers/userController.js";

const router = express.Router();

// Get Logged In User
router.get("/profile", authMiddleware, getProfile);

export default router;
