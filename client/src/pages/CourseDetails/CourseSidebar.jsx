import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { enrollCourse } from "../../services/courseService";
import { useState } from "react";
import PaymentModal from "../../components/PaymentModal";

function CourseSidebar({ course }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const handlePayment = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.warning("Please login first");
      navigate("/login");
      return;
    }

    try {
      setLoading(true);

      // Demo Payment Delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Payment Successful 🎉");

      const data = await enrollCourse(course._id, token);

      toast.success(data.message);

      setOpenModel(false);
      console.log("Navigating to my learning...");
      navigate("/my-learning");
    } catch (error) {
      if (error.response?.data?.message === "Already enrolled in this course") {
        toast.info("You already own this course.");
        navigate("/my-learning");
        return;
      }
      toast.error(
        error.response?.data?.message || "Enrollment failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
          onClick={() => setOpenModel(true)}
          className="w-full bg-green-600 text-white py-3 rounded-lg "
        >
          Buy Now
        </button>

        <PaymentModal
          isOpen={openModel}
          onClose={() => setOpenModel(false)}
          onPay={handlePayment}
          course={course}
          loading={loading}
        />
      </div>
    </>
  );
}

export default CourseSidebar;