import { useState, useEffect, useRef } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  User,
  Minimize2,
} from "lucide-react";
import { askAssistant } from "../../services/assistantService";

const Assistant = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const [chat, setChat] = useState([
    {
      sender: "ai",
      text: "👋 Welcome to Zynvora AI.",
      time: "Now",
    },
    {
      sender: "ai",
      text: "I can help you with courses, coding, notes, quizzes and much more.",
      time: "Now",
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, typing]);

  const sendMessage = async()=>{


if(!message.trim()) return;


const userText = message;


setChat(prev=>[
...prev,
{
sender:"user",
text:userText,
time:"Now"
}
]);


setMessage("");

setTyping(true);



try{


const reply = await askAssistant(userText);



setChat(prev=>[
...prev,
{
sender:"ai",
text:reply,
time:"Now"
}
]);


}
// eslint-disable-next-line no-unused-vars
catch(error){


setChat(prev=>[
...prev,
{
sender:"ai",
text:"❌ AI connection failed",
time:"Now"
}
]);


}


setTyping(false);


};

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
          fixed
          bottom-6
          right-6
          z-50
          w-16
          h-16
          rounded-full
          bg-linear-to-r
          from-blue-600
          to-indigo-600
          text-white
          shadow-2xl
          hover:scale-110
          transition
          duration-300
          animate-pulse
          flex
          items-center
          justify-center
          "
        >
          <Bot size={30} />
        </button>
      )}

      {open && (
        <div
          className="
          fixed
          bottom-6
          right-6
          z-50
          w-97.5
          h-155
          rounded-3xl
          overflow-hidden
          shadow-2xl
          border
          bg-white
          flex
          flex-col
          "
        >
          <div
            className="
            bg-linear-to-r
            from-blue-700
            via-indigo-600
            to-purple-600
            text-white
            px-5
            py-4
            flex
            justify-between
            items-center
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                w-12
                h-12
                rounded-full
                bg-white/20
                flex
                items-center
                justify-center
                "
              >
                <Sparkles size={24} />
              </div>

              <div>
                <h2 className="font-bold text-lg">
                  Zynvora AI
                </h2>

                <p className="text-xs opacity-80">
                  Smart Learning Assistant
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                className="hover:bg-white/20 p-2 rounded-lg"
              >
                <Minimize2 size={18} />
              </button>

              <button
                onClick={() => setOpen(false)}
                className="hover:bg-white/20 p-2 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div
            className="
            flex-1
            overflow-y-auto
            bg-gray-100
            px-4
            py-5
            space-y-4
            "
          >

                      {chat.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={
                    "max-w-[80%] rounded-2xl px-4 py-3 shadow whitespace-pre-line " +
                    (msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none")
                  }
                >
                  <div className="flex items-center gap-2 mb-1">
                    {msg.sender === "user" ? (
                      <User size={14} />
                    ) : (
                      <Bot size={14} />
                    )}

                    <span className="text-xs opacity-70">
                      {msg.sender === "user"
                        ? "You"
                        : "Zynvora AI"}
                    </span>
                  </div>

                  <p className="text-sm">
                    {msg.text}
                  </p>

                  <p className="text-[10px] mt-2 opacity-60 text-right">
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}


            {typing && (
              <div className="flex justify-start">
                <div
                  className="
                  bg-white
                  rounded-2xl
                  px-4
                  py-3
                  shadow
                  text-sm
                  text-gray-500
                  "
                >
                  🤖 Typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          <div
            className="
            border-t
            bg-white
            p-4
            flex
            gap-3
            "
          >

            <input
              type="text"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask anything..."
              className="
              flex-1
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />


            <button
              onClick={sendMessage}
              className="
              w-12
              h-12
              rounded-xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              hover:bg-blue-700
              transition
              "
            >
              <Send size={20}/>
            </button>

          </div>

        </div>
      )}
    </>
  );
};

export default Assistant;