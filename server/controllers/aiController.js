import { askAI } from "../services/aiService.js";
import Chat from "../models/Chat.js";

// ==========================
// Chat With AI
// ==========================
export const chatWithAI = async (req, res) => {
  console.log("✅ chatWithAI API Called");
  try {
    const { message, chatId } = req.body;

    // Validate Message
    if (!message || !message.trim()) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    // Find Existing Chat
    let chat = null;

    if (chatId) {
      chat = await Chat.findOne({
        _id: chatId,
        user: req.user.id,
      });
    }

    // Create New Chat
    if (!chat) {
      chat = await Chat.create({
        user: req.user.id,
        title: message.substring(0, 30),
        messages: [],
      });
    }

    // Save User Message
    chat.messages.push({
      role: "user",
      text: message,
    });

    // AI Reply
    let reply;

    try {
      reply = await askAI(message);
    } catch (err) {
      console.log("Gemini Error:", err);
      reply = "Sorry, AI service is unavailable right now.";
    }

    // Save AI Reply
    chat.messages.push({
      role: "ai",
      text: reply,
    });

    await chat.save();

    res.status(200).json({
      success: true,
      chatId: chat._id,
      reply,
    });

  } catch (error) {
    console.log("AI Controller Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get All Chat History
// ==========================
export const getChatHistory = async (req, res) => {
  try {
    const chats = await Chat.find({
      user: req.user.id,
    })
      .select("_id title createdAt updatedAt")
      .sort({
        updatedAt: -1,
      });

    res.status(200).json({
      success: true,
      chats,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Single Chat
// ==========================
export const getSingleChat = async (req, res) => {
  try {
    const chat = await Chat.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found",
      });
    }

    res.status(200).json({
      success: true,
      chat,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Delete Chat
// ==========================
export const deleteChat = async (req, res) => {
  try {
    const chat = await Chat.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found",
      });
    }

    await Chat.findByIdAndDelete(chat._id);

    res.status(200).json({
      success: true,
      message: "Chat deleted successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};