import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../services/courseService";

import CourseHero from "./CourseHero";
import CourseSidebar from "./CourseSidebar";
import CourseReviews from "./CourseReviews";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        if (isMounted) {
          setCourse(data.course);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCourse();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <h1 className="text-center text-3xl py-20">
        Loading...
      </h1>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <CourseHero course={course} />

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <CourseReviews course={course} />
        </div>

        <div>
          <CourseSidebar course={course} />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;