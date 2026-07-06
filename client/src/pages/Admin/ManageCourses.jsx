import { useEffect, useState } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";

function ManageCourses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const { data } = await API.get("/courses");
      setCourses(data.courses);
    } catch {
      toast.error("Failed to load courses");
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadCourses = async () => {
      try {
        const { data } = await API.get("/courses");
        if (isMounted) {
          setCourses(data.courses);
        }
      } catch {
        if (isMounted) {
          toast.error("Failed to load courses");
        }
      }
    };

    loadCourses();

    return () => {
      isMounted = false;
    };
  }, []);

  const deleteCourse = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Course deleted successfully");

      fetchCourses();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Delete failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Manage Courses
        </h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4">Instructor</th>
                <th className="p-4">Price</th>
                <th className="p-4">Level</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr key={course._id} className="border-b">

                  <td className="p-4">{course.title}</td>

                  <td className="text-center">
                    {course.instructor}
                  </td>

                  <td className="text-center">
                    ₹{course.price}
                  </td>

                  <td className="text-center">
                    {course.level}
                  </td>

                  <td className="text-center space-x-2">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteCourse(course._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default ManageCourses;