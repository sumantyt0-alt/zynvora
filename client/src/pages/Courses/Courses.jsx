import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { getCourses } from "../../services/courseService";
import CourseCard from "../../components/Home/CourseCard";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await getCourses();
        setCourses(res.courses || []);
      } catch (err) {
        console.log(err);
      }
    };

    loadCourses();
  }, []);

  const filteredCourses = useMemo(
    () =>
      courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
      ),
    [search, courses]
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100">

        {/* Hero */}

        <div className="bg-linear-to-r from-blue-700 to-indigo-700 text-white py-16">

          <div className="max-w-7xl mx-auto px-6">

            <h1 className="text-5xl font-bold">
              Explore Courses
            </h1>

            <p className="mt-4 text-lg text-gray-200">
              Learn today's most in-demand skills.
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="max-w-7xl mx-auto px-6 mt-10">

          <input
            type="text"
            placeholder="🔍 Search Courses..."
            className="w-full md:w-96 border rounded-xl p-4 shadow"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Courses */}

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard
                  key={course._id}
                  course={course}
                />
              ))
            ) : (
              <h2 className="text-2xl font-bold">
                No Courses Found 😔
              </h2>
            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Courses;