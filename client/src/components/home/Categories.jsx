import {
  FaCode,
  FaRobot,
  FaDatabase,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

function Categories() {
  const categories = [
    {
      icon: <FaCode className="text-5xl text-blue-600" />,
      title: "Web Development",
      courses: "45 Courses",
      color: "hover:border-blue-500",
    },
    {
      icon: <FaRobot className="text-5xl text-green-600" />,
      title: "Artificial Intelligence",
      courses: "28 Courses",
      color: "hover:border-green-500",
    },
    {
      icon: <FaDatabase className="text-5xl text-purple-600" />,
      title: "Data Science",
      courses: "32 Courses",
      color: "hover:border-purple-500",
    },
    {
      icon: <FaMobileAlt className="text-5xl text-orange-600" />,
      title: "App Development",
      courses: "21 Courses",
      color: "hover:border-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Categories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Explore Top Categories
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Choose a category and start learning with industry-level
            courses designed to help you build real-world skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl border-2 border-transparent p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer ${cat.color}`}
            >
              <div className="flex justify-center">
                {cat.icon}
              </div>

              <h3 className="text-xl font-bold text-center mt-6">
                {cat.title}
              </h3>

              <p className="text-gray-500 text-center mt-2">
                {cat.courses}
              </p>

              <div className="flex justify-center mt-6">
                <span className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Explore
                  <FaArrowRight />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;