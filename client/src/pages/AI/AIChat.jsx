import ChatBox from "../../components/AI/ChatBox";

const AIChat = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-4xl mx-auto">

        <div className="mb-6 text-center">

          <h1 className="text-4xl font-bold">
            🤖 Zynvora AI
          </h1>

          <p className="text-gray-600 mt-2">
            Your AI learning assistant
          </p>

        </div>


        <ChatBox />


      </div>

    </div>
  );
};


export default AIChat;