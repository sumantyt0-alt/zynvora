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
    { icon: <FaCode />, name: "Web Development" },
    { icon: <FaRobot />, name: "Artificial Intelligence" },
    { icon: <FaDatabase />, name: "Database" },
    { icon: <FaPaintBrush />, name: "UI / UX Design" },
    { icon: <FaMobileAlt />, name: "App Development" },
    { icon: <FaCloud />, name: "Cloud Computing" },
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
              className="bg-gray-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl text-blue-600 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-6">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;