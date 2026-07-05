import express from "express";
import { createCourse } from "../controllers/courseController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createCourse
);

export default router;