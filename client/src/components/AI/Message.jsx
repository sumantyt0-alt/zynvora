import ReactMarkdown from "react-markdown";

const Message = ({ role, text }) => {
  const isAI = role === "ai";

  return (
    <div
      className={`flex ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-3xl rounded-2xl px-5 py-4 shadow-md ${
          isAI
            ? "bg-white text-gray-800"
            : "bg-indigo-600 text-white"
        }`}
      >
        <div className="text-xs font-semibold mb-2 opacity-70">
          {isAI ? "🤖 Zynvora AI" : "👤 You"}
        </div>

        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Message;