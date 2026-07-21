import { useState } from "react";
import Message from "./Message";
import Typing from "./Typing";
import SuggestionCard from "./SuggestionCard";
import { askAI } from "../../services/aiService";

const ChatBox = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);


  const sendMessage = async (text = input) => {

    if (!text.trim()) return;


    const userMessage = {
      role: "user",
      text: text,
    };


    setMessages((prev) => [
      ...prev,
      userMessage
    ]);


    setInput("");
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
        console.log("Full Error:", error);
        console.log("Response:", error.response);
        console.log("Data:", error.response?.data);

        setMessages((prev) => [
            ...prev,
            {
            role: "ai",
            text: "Something went wrong ❌",
            },
        ]);
    }


    setLoading(false);
  };


  const suggestions = [
    "Explain React",
    "Generate Java notes",
    "Create a learning roadmap",
    "Explain JavaScript"
  ];


  return (
    <div className="bg-white rounded-xl shadow-lg p-5">

      <div className="h-125 overflow-y-auto space-y-3 mb-4">

        {messages.map((msg,index)=>(
          <Message
            key={index}
            role={msg.role}
            text={msg.text}
          />
        ))}


        {loading && <Typing />}

      </div>



      <div className="flex gap-2">

        <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              sendMessage();
            }
          }}
          placeholder="Ask Zynvora AI..."
          className="flex-1 border rounded-lg p-3"
        />


        <button
          onClick={()=>sendMessage()}
          className="bg-black text-white px-5 rounded-lg"
        >
          Send
        </button>

      </div>



      <div className="flex flex-wrap gap-2 mt-4">

        {suggestions.map((item,index)=>(
          <SuggestionCard
            key={index}
            text={item}
            onClick={sendMessage}
          />
        ))}

      </div>


    </div>
  );
};


export default ChatBox;