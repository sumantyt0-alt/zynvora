import { useState } from "react";

import Sidebar from "../../components/AI/Sidebar";
import Header from "../../components/AI/Header";
import ChatBox from "../../components/AI/ChatBox";


const AIChat = () => {

  const [chatKey, setChatKey] = useState(0);


  const handleNewChat = () => {
    setChatKey((prev) => prev + 1);
  };


  return (
    <div className="h-screen flex bg-gray-100">


      {/* Sidebar */}
      <Sidebar 
        onNewChat={handleNewChat}
      />


      {/* Main Area */}
      <div className="flex-1 flex flex-col">


        {/* Header */}
        <Header />


        {/* Chat Area */}
        <div className="flex-1 overflow-hidden">

          <ChatBox key={chatKey} />

        </div>


      </div>


    </div>
  );
};


export default AIChat;