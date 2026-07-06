import API from "./api";

// Get all courses
export const getCourses = async () => {
  const response = await API.get("/courses");
  return response.data;
};

// Get single course
export const getCourseById = async (id) => {
  const response = await API.get(`/courses/${id}`);
  return response.data;
};
export const enrollCourse = async (courseId, token) => {
  const response = await API.post(
    "/enrollments",
    { courseId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
