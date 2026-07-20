import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../services/courseService";
import { toast } from "react-toastify";

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
        toast.error(
          error.response?.data?.message || "Failed to load course");
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
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (!course) {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold">
        Course Not Found
      </h1>
    </div>
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