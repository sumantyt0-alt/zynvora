import express from "express";
import { generateNotes } from "../controllers/notesController.js";

const router = express.Router();

router.post("/generate", generateNotes);

export default router;