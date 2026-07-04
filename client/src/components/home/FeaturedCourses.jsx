import CourseCard from "../common/CourseCard";

function FeaturedCourses() {
  const courses = [
    {
      title: "MERN Stack Development",
      level: "Beginner",
      price: "₹999",
    },
    {
      title: "Artificial Intelligence",
      level: "Intermediate",
      price: "₹1499",
    },
    {
      title: "Python Programming",
      level: "Beginner",
      price: "₹799",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Featured Courses
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Learn from our most popular courses.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              level={course.level}
              price={course.price}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedCourses;