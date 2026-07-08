import { useEffect, useState } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch Courses
  const fetchCourses = async (showLoading = true) => {
    try {
      if (showLoading) {
        setLoading(true);
      }

      const { data } = await API.get("/courses");

      setCourses(data.courses);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadCourses = async () => {
      await fetchCourses();
    };
    loadCourses();
  }, []);

  // Delete Course
  const deleteCourse = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

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

  // Publish / Unpublish
  const togglePublish = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await API.patch(
        `/courses/${id}/publish`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(data.message);

      fetchCourses();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update publish status"
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-600">
          Loading Courses...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          📚 Manage Courses
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-center">Instructor</th>
                <th className="p-4 text-center">Category</th>
                <th className="p-4 text-center">Level</th>
                <th className="p-4 text-center">Price</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {courses.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-10 text-gray-500 text-lg"
                  >
                    No Courses Available
                  </td>
                </tr>
              ) : (
                courses.map((course) => (
                  <tr
                    key={course._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-semibold">
                      {course.title}
                    </td>

                    <td className="text-center">
                      {course.instructor}
                    </td>

                    <td className="text-center">
                      {course.category}
                    </td>

                    <td className="text-center">
                      {course.level}
                    </td>

                    <td className="text-center font-bold text-blue-600">
                      ₹{course.price}
                    </td>

                    <td className="text-center">
                      {course.isPublished ? (
                        <span className="text-green-600 font-bold">
                          ✅ Published
                        </span>
                      ) : (
                        <span className="text-red-600 font-bold">
                          📝 Draft
                        </span>
                      )}
                    </td>

                    <td className="text-center space-x-2">
                      <button
                        onClick={() =>
                          navigate(`/admin/edit-course/${course._id}`)
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
                      >
                        ✏ Edit
                      </button>

                      <button
                        onClick={() =>
                          togglePublish(course._id)
                        }
                        className={`px-4 py-2 rounded-lg text-white ${
                          course.isPublished
                            ? "bg-gray-600 hover:bg-gray-700"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        {course.isPublished
                          ? "Unpublish"
                          : "Publish"}
                      </button>

                      <button
                        onClick={() =>
                          deleteCourse(course._id)
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageCourses;