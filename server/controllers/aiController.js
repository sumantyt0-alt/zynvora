import { askAI } from "../services/aiService.js";
import Chat from "../models/Chat.js";


export const chatWithAI = async (req, res) => {

  try {

    const { message } = req.body;


    if (!message) {

      return res.status(400).json({
        message: "Message is required",
      });

    }


    // AI Response
    const reply = await askAI(message);



    // Save Chat History
    let chat = await Chat.findOne({
      user: req.user.id,
      title: "New Chat",
    });



    if (!chat) {

      chat = await Chat.create({

        user: req.user.id,

        title:
          message.substring(0, 30),

        messages: [],

      });

    }



    chat.messages.push({

      role: "user",

      text: message,

    });



    chat.messages.push({

      role: "ai",

      text: reply,

    });



    await chat.save();



    res.json({

      reply,

    });



  } catch (error) {


    console.log("AI Controller Error:", error);


    res.status(500).json({

      message: error.message,

    });


  }

};

export const getChatHistory = async (req, res) => {
  try {

    const chats = await Chat.find({
      user: req.user.id,
    })
    .sort({
      createdAt: -1,
    });


    res.json(chats);


  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const getSingleChat = async (req, res) => {
  try {
    const chat = await Chat.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!chat) {
      return res.status(404).json({
        message: "Chat not found",
      });
    }

    res.json(chat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};