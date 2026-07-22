import express from "express";
import protect from "../middleware/authMiddleware.js";
import { 
  chatWithAI,
  getChatHistory,
  getSingleChat
} from "../controllers/aiController.js";

const router = express.Router();


router.post(
  "/chat",
  protect,
  chatWithAI
);
router.get(
  "/chats",
  protect,
  getChatHistory
);
router.get("/chats/:id",protect,getSingleChat);
export default router;