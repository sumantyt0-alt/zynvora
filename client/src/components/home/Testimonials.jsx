function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      course: "MERN Stack",
      review:
        "Best platform to learn web development. Projects were amazing!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Priya Singh",
      course: "React Bootcamp",
      review:
        "The instructors explained everything clearly. Highly recommended.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Aman Verma",
      course: "Java Programming",
      review:
        "Loved the practical approach. I built my first project easily.",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          What Our Students Say
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Thousands of learners trust Zynvora to build their careers.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <p className="text-yellow-500 text-xl">
                {item.rating}
              </p>

              <p className="text-gray-600 mt-5 italic">
                "{item.review}"
              </p>

              <h3 className="text-xl font-bold mt-6">
                {item.name}
              </h3>

              <span className="text-blue-600">
                {item.course}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;