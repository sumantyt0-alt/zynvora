import { useState } from "react";
import ReactMarkdown from "react-markdown";

const Message = ({ role, text }) => {

  const [copied, setCopied] = useState(false);

  const isAI = role === "ai";


  const copyText = () => {
    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };


  return (
    <div
      className={`flex gap-3 group ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >


      {isAI && (
        <div className="
          w-10 h-10 
          rounded-full 
          bg-blue-600 
          text-white 
          flex 
          items-center 
          justify-center
        ">
          🤖
        </div>
      )}



      <div
        className={`
          relative
          max-w-[75%]
          px-5
          py-4
          rounded-2xl
          shadow-sm

          ${
            isAI
            ?
            "bg-white text-gray-800 rounded-bl-none"
            :
            "bg-blue-600 text-white rounded-br-none"
          }
        `}
      >


        <ReactMarkdown
          components={{
            code({inline, children}) {

              return inline ? (

                <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                  {children}
                </code>

              ) : (

                <pre className="
                  bg-gray-900
                  text-white
                  p-4
                  rounded-xl
                  overflow-x-auto
                  my-3
                ">
                  <code>
                    {children}
                  </code>
                </pre>

              );

            }
          }}
        >

          {text}

        </ReactMarkdown>



        {isAI && (

          <button
            onClick={copyText}
            className="
              absolute
              right-2
              bottom-2
              text-xs
              opacity-0
              group-hover:opacity-100
              bg-gray-200
              px-2
              py-1
              rounded
              transition
            "
          >

            {copied ? "Copied ✅" : "Copy 📋"}

          </button>

        )}


      </div>



      {!isAI && (

        <div className="
          w-10 
          h-10 
          rounded-full 
          bg-green-600 
          text-white 
          flex 
          items-center 
          justify-center
        ">
          👤
        </div>

      )}


    </div>
  );
};


export default Message;