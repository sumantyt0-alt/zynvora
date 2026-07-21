const Message = ({ role, text }) => {
  return (
    <div
      className={`p-3 rounded-xl max-w-[80%] ${
        role === "user"
          ? "bg-blue-600 text-white ml-auto"
          : "bg-gray-200 text-black"
      }`}
    >
      {text}
    </div>
  );
};

export default Message;