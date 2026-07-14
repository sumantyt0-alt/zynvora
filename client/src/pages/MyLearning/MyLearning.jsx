import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { getMyCourses } from "../../services/enrollmentService";

function MyLearning() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");

        const data = await getMyCourses(token);

        setCourses(data.courses || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold text-blue-600">
            Loading Courses...
          </h2>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-10 py-10 min-h-screen">

        <h1 className="text-4xl font-bold mb-8">
          📚 My Learning
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.length === 0 ? (

            <div className="col-span-full text-center py-20">

              <h2 className="text-4xl font-bold">
                📚 No Courses Yet
              </h2>

              <p className="text-gray-500 mt-4">
                Purchase your first course to start learning.
              </p>

              <Link
                to="/courses"
                className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
              >
                Explore Courses
              </Link>

            </div>

          ) : (

            courses.map((course) => (

              <div
                key={course._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={
                    course.thumbnail ||
                    "https://placehold.co/600x400"
                  }
                  alt={course.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {course.category}
                  </span>

                  <h2 className="text-2xl font-bold mt-4">
                    {course.title}
                  </h2>

                  <p className="text-gray-600 mt-3 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="mt-5">

                    <div className="flex justify-between text-sm font-medium">
                      <span>Progress</span>
                      <span>0%</span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full mt-2">

                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "0%" }}
                      />

                    </div>

                  </div>

                  <Link
                    to={`/learn/${course._id}`}
                    className="block mt-6 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
                  >
                    Continue Learning
                  </Link>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default MyLearning;