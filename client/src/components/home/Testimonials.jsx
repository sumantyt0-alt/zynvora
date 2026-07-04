import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      course: "MERN Stack",
      review:
        "This platform completely changed my coding journey. The projects are amazing.",
    },
    {
      name: "Priya Singh",
      course: "Artificial Intelligence",
      review:
        "Very easy to understand. The mentors explain everything clearly.",
    },
    {
      name: "Aman Kumar",
      course: "Python Programming",
      review:
        "One of the best learning platforms. Highly recommended for beginners.",
    },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          What Our Students Say
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Thousands of students trust SkillForge.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex text-yellow-500 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 italic">
                "{review.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-lg">
                  {review.name}
                </h3>

                <p className="text-gray-500">
                  {review.course}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;