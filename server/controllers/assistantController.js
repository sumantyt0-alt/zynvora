import mongoose from "mongoose";
import Chat from "../models/Chat.js";
import { askAI, streamAI } from "../services/aiService.js";

// ==========================
// Chat With AI (purana, ek saath poora jawab)
// ==========================
export const chatAssistant = async (req, res) => {
  try {
    const { message, chatId } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: "Message required" });
    }

    let chat = null;

    if (chatId && mongoose.Types.ObjectId.isValid(chatId)) {
      chat = await Chat.findOne({ _id: chatId, user: req.user._id });
    }

    if (!chat) {
      chat = await Chat.create({
        user: req.user._id,
        title: message.length > 30 ? message.substring(0, 30) : message,
        messages: [],
      });
    }

    chat.messages.push({ role: "user", content: message });
    await chat.save();

    const history = chat.messages
      .slice(-10)
      .map((m) => ({ role: m.role, content: m.content }));

    const reply = await askAI(history);

    chat.messages.push({ role: "assistant", content: reply });
    await chat.save();

    res.json({ success: true, chatId: chat._id, reply });
  } catch (error) {
    console.log("Assistant Error:", error.message);
    res.status(500).json({ success: false, message: "AI server error" });
  }
};

// ==========================
// Chat With AI (naya, word-by-word streaming)
// ==========================
export const chatAssistantStream = async (req, res) => {
  try {
    const { message, chatId } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: "Message required" });
    }

    let chat = null;

    if (chatId && mongoose.Types.ObjectId.isValid(chatId)) {
      chat = await Chat.findOne({ _id: chatId, user: req.user._id });
    }

    if (!chat) {
      chat = await Chat.create({
        user: req.user._id,
        title: message.length > 30 ? message.substring(0, 30) : message,
        messages: [],
      });
    }

    chat.messages.push({ role: "user", content: message });
    await chat.save();

    // AI ko pichhle 10 messages bhejo, taaki wo context yaad rakhe
    const history = chat.messages
      .slice(-10)
      .map((m) => ({ role: m.role, content: m.content }));

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    res.flushHeaders();

    const send = (obj) => res.write(`data: ${JSON.stringify(obj)}\n\n`);

    let clientGone = false;
    res.on("close", () => {
      clientGone = !res.writableEnded;
    });

    send({ type: "start", chatId: chat._id });

    const reply = await streamAI(history, (token) => {
      if (!clientGone) send({ type: "token", token });
    });

    if (reply) {
      chat.messages.push({ role: "assistant", content: reply });
      await chat.save();
    }

    send({ type: "done" });
    res.end();
  } catch (error) {
    console.log("Assistant Stream Error:", error.message);

    if (res.headersSent) {
      res.write(`data: ${JSON.stringify({ type: "error", message: "AI server error" })}\n\n`);
      res.end();
    } else {
      res.status(500).json({ success: false, message: "AI server error" });
    }
  }
};

// ==========================
// Get Chat History Sidebar
// ==========================
export const getChatHistory = async (req, res) => {
  try {
    const chats = await Chat.find({ user: req.user._id })
      .select("title updatedAt")
      .sort({ updatedAt: -1 });

    res.json({ success: true, chats });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================
// Get Single Chat
// ==========================
export const getSingleChat = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ success: false, message: "Chat not found" });
    }

    const chat = await Chat.findOne({ _id: req.params.id, user: req.user._id });

    if (!chat) {
      return res.status(404).json({ success: false, message: "Chat not found" });
    }

    res.json({ success: true, chat });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};