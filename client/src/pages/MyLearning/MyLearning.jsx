import { useEffect, useState } from "react";
import { getMyCourses } from "../../services/enrollmentService";

function MyLearning() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");

        const data = await getMyCourses(token);

        setCourses(data.courses);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">
        My Learning
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold">
                {course.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {course.description}
              </p>

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg">
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyLearning;