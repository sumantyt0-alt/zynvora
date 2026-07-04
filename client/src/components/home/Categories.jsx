import {
  FaCode,
  FaRobot,
  FaDatabase,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";

function Categories() {
  const categories = [
  { icon: <FaCode />, name: "Web Development", courses: "25 Courses" },
  { icon: <FaRobot />, name: "Artificial Intelligence", courses: "18 Courses" },
  { icon: <FaDatabase />, name: "Database", courses: "15 Courses" },
  { icon: <FaPaintBrush />, name: "UI / UX Design", courses: "12 Courses" },
  { icon: <FaMobileAlt />, name: "App Development", courses: "20 Courses" },
  { icon: <FaCloud />, name: "Cloud Computing", courses: "10 Courses" },
];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Browse Categories
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Choose your favorite technology and start learning.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 duration-300 cursor-pointer"
            >
              <div className="text-5xl text-blue-600 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-6">
                {item.name}
              </h3>
              <p className="text-gray-500 mt-2">
                {item.courses}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;