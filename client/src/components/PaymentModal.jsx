function PaymentModal({
  isOpen,
  onClose,
  onPay,
  course,
  loading,
}) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Confirm Payment
        </h2>

        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover rounded-lg"
        />

        <div className="mt-5 space-y-2">
          <h3 className="text-xl font-bold">
            {course.title}
          </h3>

          <p>
            <strong>Instructor:</strong> {course.instructor}
          </p>

          <p>
            <strong>Duration:</strong> {course.duration}
          </p>

          <p>
            <strong>Level:</strong> {course.level}
          </p>

          <p className="text-3xl font-bold text-green-600">
            ₹{course.price}
          </p>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onPay}
            disabled={loading}
            className={`flex-1 py-3 rounded-lg text-white ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Processing..." : `Pay ₹${course.price}`}
          </button>
        </div>

      </div>
    </div>
  );
}

export default PaymentModal;