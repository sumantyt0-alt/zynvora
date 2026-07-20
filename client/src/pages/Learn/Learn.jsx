import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { getCourseById } from "../../services/courseService";
import { getProgress , markLessonComplete} from "../../services/progressService";
import {
  generateCertificate,
  downloadCertificate,
} from "../../services/certificateService";
import { toast } from "react-toastify";

function Learn() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);

  const lessons =
    course?.lessons || [];

  const [currentLesson, setCurrentLesson] = useState(0);
  const [progress, setProgress] = useState(0);
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        setCourse(data.course);
        const token = localStorage.getItem("token");

        const progressData = await getProgress(id, token);

        if (progressData.progress) {
          setProgress(progressData.progress.progress);

          if (progressData.progress.certificate) {
            setCertificate(progressData.progress.certificate);
          }

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

  if (!course.lessons || course.lessons.length === 0) {
    return (
      <>
        <Navbar />

        <div className="text-center py-20">
          <h1 className="text-4xl font-bold">No Lessons Available</h1>
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

              <div className="mt-8">

                <button
                  onClick={() => navigate("/courses")}
                  className="mr-4 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                >
                  ← Back to Courses
                </button>

                <button
                  disabled={currentLesson === lessons.length - 1}
                  onClick={() => {
                      setCurrentLesson(currentLesson + 1);
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                  Next Lesson →
                </button>

                <button
                  onClick={async () => {
                    try {
                      const token = localStorage.getItem("token");

                      const data = await markLessonComplete(
                        id,
                        currentLesson,
                        token
                      );

                      const updatedProgress =
                        data.progress?.progress ||
                        data.progress?.percentage ||
                        progress;

                      setProgress(updatedProgress);

                      if (updatedProgress === 100) {
                        const cert = await generateCertificate(id, token);

                        setCertificate(cert.certificate);

                        toast.success("🎉 Certificate Unlocked!");
                      } else {
                        toast.success("Lesson Completed ✅");
                      }

                    } catch (err) {
                      console.log(err);
                      toast.error("Something went wrong");
                    }
                  }}
                  className="ml-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                >
                  ✓ Mark as Completed
                </button>

                {currentLesson === lessons.length - 1 && progress >= 100 && (
                  <button
                    onClick={() => navigate(`/quiz/${id}`)}
                    className="ml-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg"
                  >
                    🎯 Start Quiz
                  </button>
                )}

                {progress === 100 && certificate && (
                  <button
                    onClick={() => {
                      const token = localStorage.getItem("token");
                      downloadCertificate(certificate._id, token);
                    }}
                    className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
                  >
                    🏆 Download Certificate
                  </button>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Learn;