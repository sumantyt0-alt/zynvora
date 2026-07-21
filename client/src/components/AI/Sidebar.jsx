const Sidebar = () => {
  return (
    <div className="w-72 bg-gray-900 text-white flex flex-col">

      <div className="p-5 border-b border-gray-700">

        <h2 className="text-2xl font-bold">
          🤖 Zynvora AI
        </h2>

      </div>

      <button className="m-4 bg-blue-600 hover:bg-blue-700 rounded-lg py-3">
        + New Chat
      </button>

      <div className="px-4 space-y-2">

        <div className="bg-gray-800 rounded-lg p-3 cursor-pointer">
          React Notes
        </div>

        <div className="bg-gray-800 rounded-lg p-3 cursor-pointer">
          Java Quiz
        </div>

        <div className="bg-gray-800 rounded-lg p-3 cursor-pointer">
          MERN Roadmap
        </div>

      </div>

    </div>
  );
};

export default Sidebar;