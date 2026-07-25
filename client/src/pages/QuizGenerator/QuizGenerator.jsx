import { useState, useEffect, useCallback } from "react";
import { generateQuiz } from "../../services/quizService";
import { Sparkles } from "lucide-react";
import Timer from "../../components/Quiz/Timer";
import ProgressBar from "../../components/Quiz/ProgressBar";
import QuizHeader from "../../components/Quiz/QuizHeader";
import QuestionCard from "../../components/Quiz/QuestionCard";
import ResultCard from "../../components/Quiz/ResultCard";

const QuizGenerator = () => {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState("Medium");
  const [questionCount, setQuestionCount] = useState(10);
  const [timeLeft, setTimeLeft] = useState(0);

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
      setTimeLeft(questionCount * 60);
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

  const submitQuiz = useCallback(() => {
    const total = quiz.reduce((acc, q, index) => {
      return answers[index] === q.answer ? acc + 1 : acc;
    }, 0);
    setScore(total);
  }, [quiz, answers]);
    
  useEffect(() => {
    if (!quiz.length || score !== null) return;

    if (timeLeft <= 0) {
      const timerId = setTimeout(() => {
        submitQuiz();
      }, 0);

      return () => clearTimeout(timerId);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [timeLeft, quiz.length, score,  submitQuiz]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const resetQuiz = () => {
    setQuiz([]);
    setTopic("");
    setAnswers({});
    setScore(null);
    setTimeLeft(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <QuizHeader />

        {quiz.length > 0 && (
          <div className="flex justify-end mb-6">
            <Timer
              minutes={minutes}
              seconds={seconds}
            />
          </div>
        )}

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

                    <ProgressBar
                      current={Object.keys(answers).length}
                      total={quiz.length}
                    />

                    {quiz.map((q, index) => (
                      <QuestionCard
                        key={index}
                        q={q}
                        index={index}
                        answers={answers}
                        selectAnswer={selectAnswer}
                        score={score}
                      />
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
              <ResultCard
                score={score}
                total={quiz.length}
                resetQuiz={resetQuiz}
              />

            )}

          </div>
        )}

      </div>

    </div>
  );
};

export default QuizGenerator;