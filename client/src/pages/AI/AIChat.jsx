import { useEffect, useState } from "react";

import Sidebar from "../../components/AI/Sidebar";
import Header from "../../components/AI/Header";
import ChatBox from "../../components/AI/ChatBox";

import { getChats } from "../../services/aiService";

const AIChat = () => {
  const [chatKey, setChatKey] = useState(0);
  const [chats, setChats] = useState([]);

  const handleNewChat = () => {
    setChatKey((prev) => prev + 1);
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await getChats();
        if (mounted) setChats(data);
      } catch (error) {
        console.error("Error loading chats:", error);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        chats={chats}
        onNewChat={handleNewChat}
        onSelectChat={(chat) => {
          console.log(chat);
        }}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 overflow-hidden">
          <ChatBox key={chatKey} />
        </div>
      </div>
    </div>
  );
};

export default AIChat;