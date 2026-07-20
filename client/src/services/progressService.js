import API from "./api";

export const markLessonComplete = async (
  courseId,
  lessonIndex,
  token
) => {
  const { data } = await API.post(
    "/progress/complete",
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

  return data;
};

export const getProgress = async (
  courseId,
  token
) => {
  const { data } = await API.get(
    `/progress/${courseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

