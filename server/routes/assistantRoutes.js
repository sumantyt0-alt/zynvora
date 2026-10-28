import express from "express";

import {
  chatAssistant,
  getChatHistory,
  getSingleChat
} from "../controllers/assistantController.js";

import protect from "../middleware/authMiddleware.js";


const router = express.Router();


// Send message to AI
router.post(
  "/chat",
  protect,
  chatAssistant
);


// Left sidebar chat history
router.get(
  "/history",
  protect,
  getChatHistory
);


// Open previous chat
router.get(
  "/chat/:id",
  protect,
  getSingleChat
);


export default router;