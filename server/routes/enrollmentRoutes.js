import express from "express";
import {
  enrollCourse,
  getMyCourses,
} from "../controllers/enrollmentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Enroll in a course
router.post("/", authMiddleware, enrollCourse);

// Get logged-in user's enrolled courses
router.get("/my-courses", authMiddleware, getMyCourses);

export default router;