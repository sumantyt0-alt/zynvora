import { Sparkles, Bell, UserCircle2 } from "lucide-react";

const Header = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-linear-to-r from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-lg">
          <Sparkles size={20} />
        </div>

        <div>
          <h1 className="font-bold text-lg text-gray-800">
            Zynvora AI
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Online
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <button className="relative">
          <Bell className="text-gray-600" size={22} />
        </button>

        <UserCircle2
          className="text-indigo-600"
          size={38}
        />

      </div>

    </div>
  );
};

export default Header;