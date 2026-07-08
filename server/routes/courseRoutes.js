import express from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  togglePublishCourse
} from "../controllers/courseController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Create Course (Admin Only)
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createCourse
);

// Get All Courses (Public)
router.get("/", getAllCourses);

// Get Course by ID (Public)
router.get("/:id", getCourseById);

// Update Course (Admin Only)
router.put("/:id", authMiddleware, adminMiddleware, updateCourse);

router.patch(
  "/:id/publish",
  authMiddleware,
  adminMiddleware,
  togglePublishCourse
);

// Delete Course (Admin Only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteCourse);

export default router;