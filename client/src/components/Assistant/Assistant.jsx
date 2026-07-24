import { useState } from "react";
import { Bot, X, Send } from "lucide-react";

const Assistant = () => {

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      sender: "ai",
      text: "Hello 👋 I am Zynvora AI Assistant"
    }
  ]);


  const sendMessage = () => {

    if(!message.trim()) return;


    setChat([
      ...chat,
      {
        sender:"user",
        text:message
      },
      {
        sender:"ai",
        text:"AI response will come here 🤖"
      }
    ]);

    setMessage("");

  };


  return (
    <>

      {!open && (

        <button
        onClick={()=>setOpen(true)}
        className="
        fixed bottom-6 right-6
        bg-blue-600
        text-white
        w-14 h-14
        rounded-full
        flex items-center justify-center
        shadow-lg
        "
        >

          <Bot size={28}/>

        </button>

      )}



      {open && (

      <div
      className="
      fixed bottom-6 right-6
      w-96 h-125
      bg-white
      shadow-2xl
      rounded-xl
      border
      flex flex-col
      overflow-hidden
      "
      >


        <div
        className="
        bg-blue-600
        text-white
        p-4
        flex justify-between
        "
        >

          <h2>
            Zynvora AI
          </h2>


          <button onClick={()=>setOpen(false)}>
            <X/>
          </button>


        </div>



        <div
        className="
        flex-1
        p-4
        overflow-y-auto
        bg-gray-50
        "
        >

        {
          chat.map((c,i)=>(

            <div
            key={i}
            className={
              c.sender==="user"
              ?
              "text-right mb-3"
              :
              "text-left mb-3"
            }
            >

              <span
              className="
              inline-block
              px-3 py-2
              rounded-lg
              bg-white
              border
              "
              >

                {c.text}

              </span>


            </div>

          ))
        }


        </div>



        <div
        className="
        p-3
        border-t
        flex gap-2
        "
        >

          <input

          value={message}

          onChange={(e)=>setMessage(e.target.value)}

          className="
          flex-1
          border
          rounded-lg
          px-3
          "

          placeholder="Ask something..."

          />


          <button

          onClick={sendMessage}

          className="
          bg-blue-600
          text-white
          px-3
          rounded-lg
          "
          >

            <Send size={18}/>

          </button>


        </div>


      </div>

      )}

    </>
  );
};


export default Assistant;