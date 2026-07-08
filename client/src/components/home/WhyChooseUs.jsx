import { FaLaptopCode, FaCertificate, FaUserGraduate } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaLaptopCode className="text-5xl text-blue-600" />,
      title: "Hands-on Projects",
      description:
        "Build real-world projects and gain practical experience.",
    },
    {
      icon: <FaCertificate className="text-5xl text-green-600" />,
      title: "Certification",
      description:
        "Get industry-recognized certificates after course completion.",
    },
    {
      icon: <FaUserGraduate className="text-5xl text-purple-600" />,
      title: "Expert Mentors",
      description:
        "Learn directly from experienced industry professionals.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Zynvora?
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Everything you need to become job-ready.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition"
            >
              {item.icon}

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;