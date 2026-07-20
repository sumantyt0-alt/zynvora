import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import {
  getAdminDashboard,
  getStudentDashboard,
} from "../controllers/dashboardController.js";

const router = express.Router();

router.get(
  "/admin",
  authMiddleware,
  adminMiddleware,
  getAdminDashboard
);

router.get(
  "/student",
  authMiddleware,
  getStudentDashboard
);

export default router;