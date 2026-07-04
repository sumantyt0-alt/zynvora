import {
  FaLaptopCode,
  FaUserGraduate,
  FaCertificate,
  FaInfinity,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Hands-on Projects",
      desc: "Build real-world projects while learning.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Expert Mentors",
      desc: "Learn from experienced developers.",
    },
    {
      icon: <FaCertificate />,
      title: "Certificates",
      desc: "Get certificates after course completion.",
    },
    {
      icon: <FaInfinity />,
      title: "Lifetime Access",
      desc: "Access your courses anytime.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose SkillForge?
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Everything you need to become a professional developer.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl text-blue-600 flex justify-center">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;