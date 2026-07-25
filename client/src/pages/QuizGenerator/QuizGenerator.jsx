import { useState } from "react";
import { generateQuiz } from "../../services/quizService";
import {
  Brain,
  Sparkles,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react";

const QuizGenerator = () => {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState("Medium");
  const [questionCount, setQuestionCount] = useState(10);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      alert("Enter a topic");
      return;
    }

    try {
      setLoading(true);

      const data = await generateQuiz(topic, difficulty, questionCount);

      setQuiz(data);
      setAnswers({});
      setScore(null);
    } catch (err) {
      console.error(err);
      alert("Unable to generate quiz");
    } finally {
      setLoading(false);
    }
  };

  const selectAnswer = (qIndex, option) => {
    setAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  const submitQuiz = () => {
    let total = 0;

    quiz.forEach((q, index) => {
      if (answers[index] === q.answer) {
        total++;
      }
    });

    setScore(total);
  };

  const resetQuiz = () => {
    setQuiz([]);
    setTopic("");
    setAnswers({});
    setScore(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">

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

        <div className="grid md:grid-cols-4 gap-4 mb-8">

          <input
            type="text"
            placeholder="Enter Topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="
              md:col-span-2
              border
              rounded-xl
              px-5
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="
              border
              rounded-xl
              px-4
              py-3
            "
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <select
            value={questionCount}
            onChange={(e) =>
              setQuestionCount(Number(e.target.value))
            }
            className="
              border
              rounded-xl
              px-4
              py-3
            "
          >
            <option value={5}>5 Questions</option>
            <option value={10}>10 Questions</option>
            <option value={20}>20 Questions</option>
          </select>

        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-4
            rounded-xl
            font-bold
            flex
            justify-center
            items-center
            gap-2
            mb-8
          "
        >
          <Sparkles size={20} />

          {loading
            ? "Generating AI Quiz..."
            : "Generate AI Quiz"}
        </button>
                {quiz.length > 0 && (
          <div className="space-y-8">

            {quiz.map((q, index) => (
              <div
                key={index}
                className="bg-gray-50 border rounded-2xl p-6"
              >
                <h2 className="text-lg font-semibold mb-5">
                  Q{index + 1}. {q.question}
                </h2>

                <div className="grid gap-3">

                  {q.options.map((option, i) => {

                    const selected =
                      answers[index] === option;

                    let className =
                      "border rounded-xl px-4 py-3 cursor-pointer transition";

                    if (score !== null) {

                      if (option === q.answer) {
                        className +=
                          " bg-green-100 border-green-500";
                      } else if (selected) {
                        className +=
                          " bg-red-100 border-red-500";
                      }

                    } else {

                      if (selected) {
                        className +=
                          " bg-blue-100 border-blue-500";
                      }

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
                        {option}
                      </div>
                    );

                  })}

                </div>

                {score !== null && (
                  <div className="mt-4">

                    {answers[index] === q.answer ? (
                      <div className="flex items-center gap-2 text-green-600 font-semibold">
                        <CheckCircle size={20} />
                        Correct
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 text-red-600 font-semibold">
                          <XCircle size={20} />
                          Wrong
                        </div>

                        <div className="mt-4 rounded-xl border border-red-300 bg-red-50 p-4">

                          <p className="font-semibold text-red-600">
                            ❌ Your Answer
                          </p>

                          <p>{answers[index]}</p>

                          <p className="mt-3 font-semibold text-green-700">
                            ✅ Correct Answer
                          </p>

                          <p>{q.answer}</p>

                          <div className="mt-4 rounded-lg bg-blue-50 p-4">
                            <p className="font-semibold text-blue-700">
                              💡 Explanation
                            </p>

                            <p className="text-gray-700">
                              {q.explanation}
                            </p>
                          </div>

                        </div>
                      </>
                    )}

                  </div>
                )}

              </div>
            ))}

            {score === null ? (

              <button
                onClick={submitQuiz}
                className="
                w-full
                bg-green-600
                hover:bg-green-700
                text-white
                py-4
                rounded-xl
                font-bold
                text-lg
                "
              >
                Submit Quiz
              </button>

            ) : (

              <div className="bg-blue-50 border rounded-2xl p-8 text-center">

                <h2 className="text-3xl font-bold text-blue-700">
                  Your Score
                </h2>

                <p className="text-5xl font-extrabold mt-5">
                  {score} / {quiz.length}
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
                  <RotateCcw size={18} />
                  Generate New Quiz
                </button>

              </div>

            )}

          </div>
        )}

      </div>

    </div>
  );
};

export default QuizGenerator;