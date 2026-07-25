import express from "express";
import {
  getQuiz,
  submitQuiz,
  generateQuiz,
} from "../controllers/quizController.js";

const router = express.Router();

router.get("/:courseId", getQuiz);
router.post("/submit/:quizId", submitQuiz);

// AI Quiz Generator
router.post("/generate", generateQuiz);

export default router;