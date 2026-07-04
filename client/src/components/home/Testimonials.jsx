function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "MERN Developer",
      review:
        "SkillForge helped me get my first developer job. The projects were amazing!",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Priya Singh",
      role: "Python Developer",
      review:
        "The instructors explained every concept clearly. Highly recommended!",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Aman Verma",
      role: "AI Engineer",
      review:
        "Excellent platform for learning AI and Machine Learning with hands-on practice.",
      image: "https://i.pravatar.cc/150?img=8",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          What Our Students Say
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Thousands of students trust SkillForge.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto"
              />

              <h3 className="mt-5 text-xl font-bold text-center">
                {item.name}
              </h3>

              <p className="text-blue-600 text-center">
                {item.role}
              </p>

              <p className="text-gray-600 mt-5 text-center italic">
                "{item.review}"
              </p>

              <div className="text-yellow-400 text-center mt-4 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;