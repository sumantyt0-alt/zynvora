import {
  getProgress,
  markLessonComplete,
} from "../../services/progressService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { getCourseById } from "../../services/courseService";

function LearnCourse() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentLesson, setCurrentLesson] = useState(0);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        setCourse(data.course);
      } catch (error) {
        console.error(error);

        toast.error(
          error.response?.data?.message ||
            "Failed to load course"
        );
      } const loadData = async () => {
            try {
                await fetchCourse();
                await fetchProgress();
            } finally {
                setLoading(false);
            }
        };

        loadData();
    };
    const fetchProgress = async () => {
  try {
    const token = localStorage.getItem("token");

    const data = await getProgress(id, token);

    if (data.progress) {
      setProgress(data.progress.progress);
      setCompletedLessons(data.progress.completedLessons);
    }
  } catch (error) {
    console.log(error);
  }
};

   const loadData = async () => {
  await fetchCourse();
  await fetchProgress();
};

loadData(); 
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-blue-600"></div>
        </div>

        <Footer />
      </>
    );
  }

  if (!course) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            Course Not Found
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  const lesson = course.lessons?.[currentLesson];
  const nextLesson = () => {
  if (currentLesson < course.lessons.length - 1) {
    setCurrentLesson(currentLesson + 1);
  }
};

const previousLesson = () => {
  if (currentLesson > 0) {
    setCurrentLesson(currentLesson - 1);
  }
};
const completeLesson = async () => {
  try {
    const token = localStorage.getItem("token");

    const data = await markLessonComplete(
      course._id,
      currentLesson,
      token
    );

    setProgress(data.progress.progress);
    setCompletedLessons(data.progress.completedLessons);

    toast.success("Lesson Completed 🎉");
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      "Unable to save progress"
    );
  }
};

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 min-h-screen">

        <h1 className="text-4xl font-bold mb-2">
          {course.title}
        </h1>

        <p className="text-gray-500 mb-8">
          {course.description}
        </p>

        <div className="mt-6 mb-8">
            <div className="flex justify-between mb-2">
                <span className="font-semibold">
                Course Progress
                </span>

                <span>{progress}%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">
                <div
                className="bg-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
                />
            </div>
            </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Video */}

          <div className="lg:col-span-2">

            <div className="bg-white rounded-2xl shadow-lg p-5">

              <div className="aspect-video rounded-xl overflow-hidden">

                <iframe
                  src={lesson?.videoUrl}
                  title={lesson?.title}
                  className="w-full h-full"
                  allowFullScreen
                />

              </div>

              <h2 className="text-2xl font-bold mt-6">
                {lesson?.title}
              </h2>

              <p className="text-gray-500 mt-2">
                Duration : {lesson?.duration}
              </p>
              <div className="flex justify-between mt-8">
                <button
                    onClick={previousLesson}
                    disabled={currentLesson === 0}
                    className="px-6 py-3 bg-gray-300 rounded-lg disabled:opacity-50"
                >
                    ⬅ Previous
                </button>

                <button
                    onClick={nextLesson}
                    disabled={currentLesson === course.lessons.length - 1}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                >
                    Next ➜
                </button>

                <button
                    onClick={completeLesson}
                    className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
                    >
                    ✓ Mark as Completed
                    </button>
                </div>

            </div>

          </div>

          {/* Lesson List */}

          <div>

            <div className="bg-white rounded-2xl shadow-lg p-5">

              <h2 className="text-2xl font-bold mb-5">
                Course Lessons
              </h2>

              <div className="space-y-3">

                {course.lessons?.map((item, index) => (

                  <button
                    key={index}
                    onClick={() => setCurrentLesson(index)}
                    className={`w-full text-left p-4 rounded-xl transition ${
                      currentLesson === index
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <p className="font-semibold flex justify-between">
                        <span>Lesson {index + 1}</span>

                        {completedLessons.includes(index) && (
                            <span className="text-green-500">✓</span>
                        )}
                    </p>

                    <p className="text-sm">
                      {item.title}
                    </p>

                  </button>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default LearnCourse;