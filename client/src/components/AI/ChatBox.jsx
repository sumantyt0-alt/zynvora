import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import Typing from "./Typing";
import SuggestionCard from "./SuggestionCard";
import ChatInput from "./ChatInput";
import { askAI } from "../../services/aiService";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Hello! I am Zynvora AI. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);


  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);


  const sendMessage = async (text) => {

    if (!text.trim()) return;


    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
      },
    ]);


    setLoading(true);


    try {

      const data = await askAI(text);


      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply,
        },
      ]);


    } catch (error) {

      console.log(error);


      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "❌ Something went wrong. Try again.",
        },
      ]);

    }


    setLoading(false);
  };



  const suggestions = [
    "Explain React",
    "Generate Java Notes",
    "Create MERN Roadmap",
    "Explain DBMS",
  ];



  return (

    <div className="flex flex-col h-full">


      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">


        {messages.map((msg,index)=>(

          <Message
            key={index}
            role={msg.role}
            text={msg.text}
          />

        ))}


        {
          loading && <Typing />
        }


        <div ref={chatEndRef}></div>


      </div>



      {/* Suggestions */}

      {
        messages.length === 1 && (

          <div className="px-6 pb-3 flex flex-wrap gap-3">

            {
              suggestions.map((item,index)=>(

                <SuggestionCard
                  key={index}
                  text={item}
                  onClick={sendMessage}
                />

              ))
            }

          </div>

        )
      }



      {/* Input */}

      <ChatInput
        onSend={sendMessage}
      />


    </div>

  );
};


export default ChatBox;