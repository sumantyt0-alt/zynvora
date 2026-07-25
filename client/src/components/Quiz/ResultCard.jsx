import { RotateCcw } from "lucide-react";

const ResultCard = ({
  score,
  total,
  resetQuiz,
}) => {

  return (
    <div className="bg-blue-50 border rounded-2xl p-8 text-center">

      <h2 className="text-3xl font-bold text-blue-700">
        Your Score
      </h2>


      <p className="text-5xl font-extrabold mt-5">
        {score} / {total}
      </p>


      <button
        onClick={resetQuiz}
        className="
        mt-8
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-6
        py-3
        rounded-xl
        inline-flex
        items-center
        gap-2
        "
      >
        <RotateCcw size={18}/>
        Generate New Quiz
      </button>


    </div>
  );
};

export default ResultCard;