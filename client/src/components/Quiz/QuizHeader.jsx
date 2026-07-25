import { Brain } from "lucide-react";

const QuizHeader = () => {
  return (
    <div className="flex items-center gap-4 mb-8">

      <div
        className="
          bg-blue-100
          p-3
          rounded-2xl
          flex
          items-center
          justify-center
        "
      >
        <Brain
          size={42}
          className="text-blue-600"
        />
      </div>


      <div>

        <h1
          className="
            text-3xl
            font-bold
            text-gray-800
          "
        >
          AI Quiz Generator
        </h1>


        <p
          className="
            text-gray-500
            mt-1
          "
        >
          Create smart MCQ quizzes powered by Gemini AI
        </p>

      </div>

    </div>
  );
};

export default QuizHeader;