import express from "express";
import {
  markLessonComplete,
  getProgress,
} from "../controllers/progressController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/complete", authMiddleware, markLessonComplete);
router.get("/:courseId", authMiddleware, getProgress);
export default router;