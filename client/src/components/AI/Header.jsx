const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          🤖 Zynvora AI
        </h1>

        <p className="text-sm text-gray-500">
          Your AI Learning Assistant
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="text-sm text-gray-600">
          Online
        </span>
      </div>

    </div>
  );
};

export default Header;