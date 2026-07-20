import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  generateCertificate,
  downloadCertificate,
} from "../controllers/certificateController.js";

const router = express.Router();

router.post("/generate", authMiddleware, generateCertificate);

router.get(
  "/download/:id",
  authMiddleware,
  downloadCertificate
);

export default router;