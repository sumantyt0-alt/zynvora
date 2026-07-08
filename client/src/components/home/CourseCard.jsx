import { Link } from "react-router-dom";
import { FaClock, FaUserGraduate, FaTag } from "react-icons/fa";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* Thumbnail */}
      <div className="relative">

        <img
          src={course.thumbnail || "https://placehold.co/600x400"}
          alt={course.title}
          className="w-full h-56 object-cover"
        />

        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
          Bestseller
        </span>

      </div>

      {/* Content */}
      <div className="p-5">

        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {course.category}
        </span>

        <h3 className="text-xl font-bold mt-4 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-gray-500 mt-3 line-clamp-2">
          {course.description}
        </p>

        <div className="mt-5 space-y-2 text-gray-600">

          <p className="flex items-center gap-2">
            <FaUserGraduate />
            {course.instructor}
          </p>

          <p className="flex items-center gap-2">
            <FaClock />
            {course.duration}
          </p>

          <p className="flex items-center gap-2">
            <FaTag />
            {course.level}
          </p>

        </div>

        <div className="flex justify-between items-center mt-6">

          <span className="text-2xl font-bold text-blue-600">
            ₹{course.price}
          </span>

          <Link
            to={`/courses/${course._id}`}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default CourseCard;