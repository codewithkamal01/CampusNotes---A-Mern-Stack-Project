import express from "express";
import {
  uploadNote,
  getAllNotes,
  getLatestNotes,
  getMyNotes,
  deleteNote,
} from "../controllers/noteController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

//upload notes
router.post("/upload", authMiddleware, upload.single("file"), uploadNote);

// Get User Notes
router.get("/my-notes", authMiddleware, getMyNotes);
router.delete("/:id", authMiddleware, deleteNote);

// Get Latest Notes
router.get("/latest", getLatestNotes);

// Get All Notes
router.get("/", getAllNotes);

export default router;
