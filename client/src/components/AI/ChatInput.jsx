import { useState } from "react";
import { Send } from "lucide-react";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 bg-gray-100 border-t">

      <div className="max-w-4xl mx-auto flex items-end gap-3 bg-white rounded-2xl shadow-md border px-4 py-3">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Zynvora AI..."
          rows="1"
          className="
            flex-1
            resize-none
            outline-none
            bg-transparent
            text-gray-700
            max-h-32
          "
        />


        <button
          onClick={handleSend}
          className="
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            p-3
            rounded-xl
            transition
          "
        >
          <Send size={20}/>
        </button>

      </div>

    </div>
  );
};

export default ChatInput;