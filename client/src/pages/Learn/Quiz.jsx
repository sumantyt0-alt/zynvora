import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { getCourseById } from "../../services/courseService";
import {
  generateCertificate,
  downloadCertificate,
} from "../../services/certificateService";
import { toast } from "react-toastify";

function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const data = await getCourseById(id);
        setCourse(data.course);
      } catch (err) {
        console.log(err);
        toast.error("Unable to load quiz");
      } finally {
        setLoading(false);
      }
    };

    loadCourse();
  }, [id]);

  const selectOption = (qIndex, optionIndex) => {
    setAnswers({
      ...answers,
      [qIndex]: optionIndex,
    });
  };

  const submitQuiz = async () => {
    let correct = 0;

    course.quiz.forEach((q, index) => {
      if (answers[index] === q.answer) {
        correct++;
      }
    });

    const percentage = Math.round(
      (correct / course.quiz.length) * 100
    );

    setScore(percentage);

    if (percentage >= 60) {
      toast.success("🎉 Congratulations! You Passed");

      try {
        const token = localStorage.getItem("token");

        const data = await generateCertificate(id, token);

        setCertificate(data.certificate);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("You did not pass. Try Again.");
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-20 text-3xl">
        Loading Quiz...
      </div>
    );
  }

  if (!course || !course.quiz || course.quiz.length === 0) {
    return (
      <>
        <Navbar />

        <div className="text-center py-20">
          <h1 className="text-4xl font-bold">
            No Quiz Available
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold mb-2">
          {course.title}
        </h1>

        <p className="text-gray-500 mb-10">
          Final Assessment Quiz
        </p>

        {course.quiz.map((question, qIndex) => (

          <div
            key={qIndex}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <h2 className="text-xl font-bold mb-5">
              Q{qIndex + 1}. {question.question}
            </h2>

            <div className="space-y-3">

              {question.options.map((option, index) => (

                <button
                  key={index}
                  onClick={() =>
                    selectOption(qIndex, index)
                  }
                  className={`w-full text-left p-4 rounded-lg border transition ${
                    answers[qIndex] === index
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>

              ))}

            </div>

          </div>

        ))}

        <button
          onClick={submitQuiz}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          Submit Quiz
        </button>

        {score !== null && (

          <div className="mt-10 bg-white rounded-xl shadow-lg p-8 text-center">

            <h2 className="text-4xl font-bold">
              Score : {score}%
            </h2>

            {score >= 60 ? (
              <>
                <p className="text-green-600 text-xl mt-4">
                  🎉 You Passed
                </p>

                {certificate && (
                  <button
                    onClick={() => {
                      const token = localStorage.getItem("token");

                      downloadCertificate(
                        certificate._id,
                        token
                      );
                    }}
                    className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg"
                  >
                    Download Certificate
                  </button>
                )}
              </>
            ) : (
              <>
                <p className="text-red-600 text-xl mt-4">
                  ❌ Failed
                </p>

                <button
                  onClick={() => window.location.reload()}
                  className="mt-6 bg-orange-600 text-white px-8 py-3 rounded-lg"
                >
                  Retry Quiz
                </button>
              </>
            )}

            <button
              onClick={() => navigate(`/learn/${id}`)}
              className="ml-4 mt-6 bg-gray-600 text-white px-8 py-3 rounded-lg"
            >
              Back to Course
            </button>

          </div>

        )}

      </div>

      <Footer />
    </>
  );
}

export default Quiz;