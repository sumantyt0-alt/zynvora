import Chat from "../models/Chat.js";
import { askAI } from "../services/aiService.js";


// ==========================
// Chat With AI
// ==========================

export const chatAssistant = async (req, res) => {

  try {

    const { message, chatId } = req.body;


    if (!message || !message.trim()) {

      return res.status(400).json({
        success:false,
        message:"Message required"
      });

    }


    let chat;


    // Existing chat open
    if(chatId){

      chat = await Chat.findOne({
        _id: chatId,
        user:req.user._id
      });

    }


    // New chat create
    if(!chat){

      chat = await Chat.create({

        user:req.user._id,

        title:
        message.length > 30
        ? message.substring(0,30)
        : message,

        messages:[]

      });

    }



    // Save user message

    chat.messages.push({

      role:"user",

      content:message

    });



    await chat.save();



    // AI Response

    const reply = await askAI(message);



    // Save AI reply

    chat.messages.push({

      role:"assistant",

      content:reply

    });



    await chat.save();



    res.json({

      success:true,

      chatId:chat._id,

      reply

    });



  } catch(error){


    console.log(
      "Assistant Error:",
      error.message
    );


    res.status(500).json({

      success:false,

      message:"AI server error"

    });


  }

};





// ==========================
// Get Chat History Sidebar
// ==========================

export const getChatHistory = async(req,res)=>{

  try{


    const chats = await Chat.find({

      user:req.user._id

    })
    .select("title updatedAt")
    .sort({
      updatedAt:-1
    });



    res.json({

      success:true,

      chats

    });



  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }

};





// ==========================
// Get Single Chat
// ==========================

export const getSingleChat = async(req,res)=>{

  try{


    const chat = await Chat.findOne({

      _id:req.params.id,

      user:req.user._id

    });



    if(!chat){

      return res.status(404).json({

        success:false,

        message:"Chat not found"

      });

    }



    res.json({

      success:true,

      chat

    });



  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }

};