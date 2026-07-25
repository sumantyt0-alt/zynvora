import { Brain } from "lucide-react";

const QuizHeader = () => {
  return (
    <div className="flex items-center gap-3 mb-8">

      <Brain
        size={40}
        className="text-blue-600"
      />

      <div>
        <h1 className="text-3xl font-bold">
          AI Quiz Generator
        </h1>

        <p className="text-gray-500">
          Generate MCQ quizzes using Gemini AI
        </p>
      </div>

    </div>
  );
};

export default QuizHeader;