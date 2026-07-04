import courses from "../../data/courses";
import CourseCard from "./CourseCard";

function FeaturedCourses() {
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
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedCourses;