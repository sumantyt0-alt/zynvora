import { FaCode, FaRobot, FaDatabase, FaMobileAlt } from "react-icons/fa";

function Categories() {
  const categories = [
    {
      icon: <FaCode className="text-5xl text-blue-600" />,
      title: "Web Development",
    },
    {
      icon: <FaRobot className="text-5xl text-green-600" />,
      title: "Artificial Intelligence",
    },
    {
      icon: <FaDatabase className="text-5xl text-purple-600" />,
      title: "Data Science",
    },
    {
      icon: <FaMobileAlt className="text-5xl text-orange-600" />,
      title: "App Development",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Popular Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-14">

          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow p-8 text-center hover:-translate-y-2 hover:shadow-xl transition"
            >
              <div className="flex justify-center">
                {cat.icon}
              </div>

              <h3 className="text-xl font-bold mt-5">
                {cat.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;