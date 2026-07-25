import { Link } from "react-router-dom";
import {
  FaClock,
  FaUserGraduate,
  FaTag,
  FaStar
} from "react-icons/fa";

function CourseCard({ course }) {

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* Thumbnail */}
      <div className="relative">

        <img
          src={course.thumbnail || "https://placehold.co/600x400"}
          alt={course.title}
          className="w-full h-52 object-cover"
        />


        {course.bestseller !== false && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded">
            Bestseller
          </span>
        )}

      </div>


      {/* Content */}
      <div className="p-5">


        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {course.category}
        </span>


        <h3 className="text-xl font-bold mt-4 line-clamp-2">
          {course.title}
        </h3>


        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {course.description}
        </p>


        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">

          <span className="font-bold text-yellow-600">
            {course.rating || "4.8"}
          </span>

          <FaStar className="text-yellow-400"/>

          <span className="text-gray-500 text-sm">
            ({course.students || 1500} students)
          </span>

        </div>



        {/* Details */}
        <div className="mt-4 space-y-2 text-gray-600 text-sm">


          <p className="flex items-center gap-2">
            <FaUserGraduate/>
            {course.instructor || "Zynvora Instructor"}
          </p>


          <p className="flex items-center gap-2">
            <FaClock/>
            {course.duration || "10 Hours"}
          </p>


          <p className="flex items-center gap-2">
            <FaTag/>
            {course.level || "Beginner"}
          </p>


        </div>



        {/* Price */}
        <div className="flex items-center gap-3 mt-5">

          <span className="text-2xl font-bold text-blue-600">
            ₹{course.price}
          </span>


          {course.oldPrice && (
            <span className="text-gray-400 line-through">
              ₹{course.oldPrice}
            </span>
          )}

        </div>



        <Link
          to={`/courses/${course._id}`}
          className="block text-center mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          View Course
        </Link>


      </div>

    </div>
  );
}


export default CourseCard;