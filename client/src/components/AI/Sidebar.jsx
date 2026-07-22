const Sidebar = ({ chats = [], onNewChat, onSelectChat }) => {
  return (
    <div className="w-72 bg-gray-900 text-white flex flex-col">

      <div className="p-5 border-b border-gray-700">
        <h2 className="text-2xl font-bold">
          🤖 Zynvora AI
        </h2>
      </div>

      <button
        onClick={onNewChat}
        className="m-4 bg-blue-600 hover:bg-blue-700 rounded-lg py-3"
      >
        + New Chat
      </button>

      <div className="flex-1 overflow-y-auto px-3 pb-3">

        {chats.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No chats yet
          </p>
        ) : (
          chats.map((chat) => (
            <button
              key={chat._id}
              onClick={() => onSelectChat(chat)}
              className="w-full text-left bg-gray-800 hover:bg-gray-700 rounded-lg p-3 mb-2"
            >
              {chat.title}
            </button>
          ))
        )}

      </div>

    </div>
  );
};

export default Sidebar;