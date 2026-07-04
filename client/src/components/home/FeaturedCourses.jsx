function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "MERN Stack Development",
      level: "Beginner",
      price: "₹999",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      level: "Intermediate",
      price: "₹1499",
    },
    {
      id: 3,
      title: "Python Programming",
      level: "Beginner",
      price: "₹799",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Featured Courses
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Start learning from our most popular courses.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="h-44 bg-blue-100 rounded-xl mb-5"></div>

              <h3 className="text-2xl font-bold">
                {course.title}
              </h3>

              <p className="mt-2 text-gray-500">
                Level : {course.level}
              </p>

              <div className="flex justify-between items-center mt-6">

                <span className="text-2xl font-bold text-blue-600">
                  {course.price}
                </span>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  Enroll
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;