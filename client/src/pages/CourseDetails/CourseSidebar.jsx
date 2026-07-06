import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { enrollCourse } from "../../services/courseService";

function CourseSidebar({ course }) {
  const navigate = useNavigate();

  const handleEnroll = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.warning("Please login first");
      navigate("/login");
      return;
    }

    try {
      const data = await enrollCourse(course._id, token);

      toast.success(data.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Enrollment failed"
      );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full rounded-lg"
      />

      <h2 className="text-3xl font-bold mt-6 text-blue-600">
        ₹{course.price}
      </h2>

      <div className="mt-4 space-y-2 text-gray-600">
        <p>
          <strong>Instructor:</strong> {course.instructor}
        </p>

        <p>
          <strong>Duration:</strong> {course.duration}
        </p>

        <p>
          <strong>Level:</strong> {course.level}
        </p>

        <p>
          <strong>Category:</strong> {course.category}
        </p>
      </div>

      <button
        onClick={handleEnroll}
        className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition"
      >
        Enroll Now
      </button>
    </div>
  );
}

export default CourseSidebar;