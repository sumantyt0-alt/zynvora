import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../services/api";

function FeaturedCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchCourses = async () => {
    try {
      const response = await API.get("/courses");

      console.log("Full Response:", response.data);
      console.log("Response Data:", response.data);

      setCourses(response.data.courses);
    } catch (err) {
      console.error("Error:", err);
      console.log("Status:", err.response?.status);
      console.log("Data:", err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  fetchCourses();
}, []);

useEffect(() => {
  console.log("Courses State:", courses);
}, [courses]);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <h2 className="text-center text-3xl font-bold">
          Loading Courses...
        </h2>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Featured Courses
          </h2>

          <p className="text-gray-600 mt-4">
            Learn the most in-demand skills from industry experts.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <p className="text-red-600 text-2xl">
            Total Courses: {courses.length}
          </p>
          {courses.map((course) => (
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

                <h3 className="text-2xl font-bold mt-4">
                  {course.title}
                </h3>

                <p className="text-gray-600 mt-3 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex justify-between mt-5 text-sm text-gray-500">
                  <span>👨‍🏫 {course.instructor}</span>
                  <span>📈 {course.level}</span>
                </div>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-2xl font-bold text-blue-600">
                    ₹{course.price}
                  </span>

                  <Link
                    to={`/courses/${course._id}`}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    View
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedCourses;