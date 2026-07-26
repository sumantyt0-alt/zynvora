import { askAI } from "../services/aiService.js";


// ==========================
// AI Assistant Chat
// ==========================

export const chatAssistant = async (req, res) => {

  try {


    const { message } = req.body;


    if (!message || !message.trim()) {

      return res.status(400).json({

        success: false,
        message: "Message required"

      });

    }



    const reply = await askAI(message);



    res.json({

      success: true,
      reply

    });



  } catch (error) {


    console.log(
      "Assistant Error:",
      error.message
    );


    res.status(500).json({

      success: false,
      message: "AI server error"

    });


  }

};