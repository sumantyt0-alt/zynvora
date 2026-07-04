function CourseCard({ title, level, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <div className="h-48 bg-linear-to-r from-blue-500 to-indigo-600"></div>

      <div className="p-6">

        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {level}
        </span>

        <h3 className="text-2xl font-bold mt-4">
          {title}
        </h3>

        <p className="text-gray-500 mt-3">
          Learn with projects and real-world examples.
        </p>

        <div className="flex justify-between items-center mt-6">

          <span className="text-2xl font-bold text-blue-600">
            {price}
          </span>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
            Enroll
          </button>

        </div>

      </div>

    </div>
  );
}

export default CourseCard;