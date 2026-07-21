import { askAI } from "../services/aiService.js";

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const reply = await askAI(message);

    res.json({
      reply,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};