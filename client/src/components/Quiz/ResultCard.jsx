import { RotateCcw, Trophy, XCircle } from "lucide-react";

const ResultCard = ({
  score,
  total,
  resetQuiz,
}) => {

  const percentage = Math.round(
    (score / total) * 100
  );


  const passed = percentage >= 50;


  return (
    <div
      className="
        bg-blue-50
        border
        rounded-2xl
        p-8
        text-center
      "
    >

      <div className="flex justify-center mb-4">

        {passed ? (
          <Trophy
            size={50}
            className="text-yellow-500"
          />
        )
        :
        (
          <XCircle
            size={50}
            className="text-red-500"
          />
        )}

      </div>


      <h2
        className="
          text-3xl
          font-bold
          text-blue-700
        "
      >
        Quiz Completed
      </h2>


      <p
        className="
          text-5xl
          font-extrabold
          mt-5
        "
      >
        {score} / {total}
      </p>


      <p
        className="
          text-xl
          font-semibold
          mt-3
        "
      >
        {percentage}% Score
      </p>


      <p
        className={`
          mt-3
          font-bold
          text-lg
          ${
            passed
            ? "text-green-600"
            : "text-red-600"
          }
        `}
      >

        {
          passed
          ? "🎉 Great Job! You Passed"
          : "Keep Practicing! Try Again"
        }

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
          font-semibold
        "
      >
        <RotateCcw size={18}/>
        Generate New Quiz
      </button>


    </div>
  );
};

export default ResultCard;