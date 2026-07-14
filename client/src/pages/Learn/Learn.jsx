import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { getCourseById } from "../../services/courseService";
import {
  updateProgress,
  getProgress,
} from "../../services/progressService";

function Learn() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);

  const lessons =
    course?.lessons || [];

  const [currentLesson, setCurrentLesson] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        setCourse(data.course);
        const token = localStorage.getItem("token");

        const progressData = await getProgress(id, token);

        if (progressData.progress) {
          setProgress(progressData.progress.percentage);

          if (
            progressData.progress.completedLessons &&
            progressData.progress.completedLessons.length > 0
          ) {
            setCurrentLesson(
              progressData.progress.completedLessons.length - 1
            );
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) {
  return (
    <div className="text-center mt-20 text-2xl">
      Loading...
    </div>
  );
}

if (course.lessons.length === 0) {
  return (
    <>
      <Navbar />

      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">
          No Lessons Available
        </h1>

        <p className="text-gray-500 mt-4">
          This course doesn't have any lessons yet.
        </p>
      </div>

      <Footer />
    </>
  );
}

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-8 px-6">

        <h1 className="text-4xl font-bold mb-8">
          {course.title}
        </h1>

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Lessons */}

          <div className="bg-white rounded-xl shadow-lg p-5">

            <h2 className="text-2xl font-bold mb-5">
              Lessons
            </h2>

            <div className="space-y-3">

              {lessons.map((lesson, index) => (

                <button
                  key={index}
                  onClick={() => setCurrentLesson(index)}
                  className={`w-full text-left p-4 rounded-lg transition ${
                    currentLesson === index
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  ▶ {lesson.title}
                </button>

              ))}

            </div>

          </div>

          {/* Video */}

          <div className="lg:col-span-3">

            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">

              <iframe
                className="w-full h-full"
                src={lessons[currentLesson].videoUrl}
                title="Lesson"
                allowFullScreen
              />

            </div>

            <div className="bg-white mt-6 rounded-xl shadow-lg p-6">

              <h2 className="text-3xl font-bold">
                {lessons[currentLesson].title}
              </h2>

              <p className="text-gray-600 mt-4">
                Watch the lesson carefully and continue your learning journey.
              </p>

              <div className="mt-8">

                <div className="flex justify-between">

                  <span>Course Progress</span>

                  <span>{progress}%</span>

                </div>

                <div className="h-3 bg-gray-200 rounded-full mt-3">

                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{
                      width: `${progress}%`,
                    }}
                  />

                </div>

              </div>

              <button
                onClick={async () => {
                  if (currentLesson >= lessons.length - 1) return;

                  const nextLesson = currentLesson + 1;

                  setCurrentLesson(nextLesson);

                  try {
                    const token = localStorage.getItem("token");

                    const data = await updateProgress(
                      id,
                      nextLesson,
                      token
                    );

                    setProgress(data.progress.percentage);
                  } catch (err) {
                    console.log(err);
                  }
                }}
                className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Next Lesson →
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Learn;