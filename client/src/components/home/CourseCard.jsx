function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-56 object-cover"
        />

        {course.bestseller && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            Best Seller
          </span>
        )}

        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
          ❤️
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{course.title}</h3>

        <p className="text-gray-500 mt-2">
          👨‍🏫 {course.instructor}
        </p>

        <div className="flex justify-between mt-3 text-sm">
          <span>⭐ {course.rating}</span>
          <span>⏱ {course.duration}</span>
        </div>

        <p className="mt-3 text-gray-500">
          👨‍🎓 {course.students} Students
        </p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-2xl font-bold text-blue-600">
            ₹{course.price}
          </span>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 duration-300">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;