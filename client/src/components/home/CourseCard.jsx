import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">
          {course.title}
        </h3>

        <p className="text-gray-500 mt-2">
          👨‍🏫 {course.instructor}
        </p>

        <p className="text-gray-500 mt-2">
          ⏱ {course.duration}
        </p>

        <div className="flex justify-between items-center mt-6">
          <span className="text-2xl font-bold text-blue-600">
            ₹{course.price}
          </span>

          <Link
            to={`/courses/${course._id}`}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;