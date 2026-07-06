import { useEffect, useState } from "react";
import { getCourses } from "../../services/courseService";
import CourseCard from "./CourseCard";

function FeaturedCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data.courses);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);


  if (loading) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold">Loading Courses...</h2>
      </section>
    );
  }

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
              key={course._id}
              course={course}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedCourses;