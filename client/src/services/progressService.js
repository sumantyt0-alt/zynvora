import API from "./api";

export const updateProgress = async (
  courseId,
  lessonIndex,
  token
) => {
  const response = await API.post(
    "/progress/update",
    {
      courseId,
      lessonIndex,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getProgress = async (courseId, token) => {
  const response = await API.get(
    `/progress/${courseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};