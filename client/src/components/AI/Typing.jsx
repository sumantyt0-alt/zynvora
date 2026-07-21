const Typing = () => {
  return (
    <div className="flex items-center gap-3">

      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">
        🤖
      </div>


      <div className="bg-gray-100 px-5 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">

        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>

        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>

        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>

      </div>

    </div>
  );
};

export default Typing;