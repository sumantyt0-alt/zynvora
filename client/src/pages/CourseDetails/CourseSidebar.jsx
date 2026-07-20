import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { enrollCourse } from "../../services/courseService";
import { useState } from "react";
import PaymentModal from "../../components/PaymentModal";
import { createOrder } from "../../services/paymentService";

function CourseSidebar({ course }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handlePayment = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.warning("Please login first");
    navigate("/login");
    return;
  }

  try {
    setLoading(true);

    // Create Razorpay Order
    const order = await createOrder(course.price, token);
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,

      amount: order.order.amount,

      currency: order.order.currency,

      name: "Zynvora",

      description: course.title,

      order_id: order.order.id,

      handler: async function () {
        toast.success("Payment Successful 🎉");

        const data = await enrollCourse(course._id, token);

        toast.success(data.message);

        navigate("/my-learning");
      },

      prefill: {
        name: user.name,
        email: user.email,
      },

      theme: {
        color: "#2563eb",
      },
    };
    if (!window.Razorpay) {
     toast.error("Razorpay SDK not loaded");
      return;
    }
    const razor = new window.Razorpay(options);

    razor.open();
  } catch (error) {
    console.log(error);

    toast.error(
      error.response?.data?.message || error.message || "Payment Failed"
    ); 
    } finally {
      setLoading(false);
      setOpenModal(false);
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
          disabled={loading}
          onClick={() => setOpenModal(true)}
          className="w-full bg-green-600 text-white py-3 rounded-lg disabled:bg-gray-400"
        >
          {loading ? "Processing..." : "Buy Now"}
        </button>

        <PaymentModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          onPay={handlePayment}
          course={course}
          loading={loading}
        />
      </div>
    </>
  );
}

export default CourseSidebar;