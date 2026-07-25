import {
  CheckCircle,
  XCircle,
  CircleAlert,
} from "lucide-react";

const QuestionCard = ({
  q,
  index,
  answers,
  selectAnswer,
  score,
}) => {

  return (
    <div className="bg-gray-50 border rounded-2xl p-6">

      <h2 className="text-lg font-semibold mb-5">
        Q{index + 1}. {q.question}
      </h2>


      <div className="grid gap-3">

        {q.options.map((option, i) => {

          const selected = answers[index] === option;

          let className =
            "border rounded-xl px-4 py-3 cursor-pointer transition flex justify-between items-center";


          if (score !== null) {

            if (option === q.answer) {

              className +=
                " bg-green-100 border-green-500 text-green-700";

            } 
            else if (selected) {

              className +=
                " bg-red-100 border-red-500 text-red-700";

            }

          } 
          else if (selected) {

            className +=
              " bg-blue-100 border-blue-500";

          }


          return (
            <div
              key={i}
              onClick={() =>
                score === null &&
                selectAnswer(index, option)
              }
              className={className}
            >

              <span>
                {option}
              </span>


              {score !== null && option === q.answer && (
                <CheckCircle size={20}/>
              )}


              {score !== null &&
                selected &&
                option !== q.answer && (
                <XCircle size={20}/>
              )}

            </div>
          );

        })}

      </div>


      {score !== null && (

        <div className="mt-4">

          {
            answers[index] === undefined ? (

              <div className="flex gap-2 text-yellow-600 font-semibold">
                <CircleAlert size={20}/>
                Not Attempted
              </div>

            )

            :

            answers[index] === q.answer ?

            (
              <div className="flex gap-2 text-green-600 font-semibold">
                <CheckCircle size={20}/>
                Correct Answer
              </div>
            )

            :

            (
              <div className="flex gap-2 text-red-600 font-semibold">
                <XCircle size={20}/>
                Wrong Answer
              </div>
            )

          }

        </div>

      )}


    </div>
  );
};

export default QuestionCard;