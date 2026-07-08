import API from "./api";

export const getMyCourses = async (token) => {
  const response = await API.get("/enrollments/my-courses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};