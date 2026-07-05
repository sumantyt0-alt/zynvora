import express from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// Create Course (Admin Only)
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createCourse
);

// Get All Courses (Public)
router.get("/", getAllCourses);

// Get Course by ID (Public)
router.get("/:id", getCourseById);

// Update Course (Admin Only)
router.put("/:id", authMiddleware, adminMiddleware, updateCourse);

// Delete Course (Admin Only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteCourse);

export default router;