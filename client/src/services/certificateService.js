import API from "./api";

export const generateCertificate = async (courseId, token) => {
  const response = await API.post(
    "/certificates/generate",
    { courseId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const downloadCertificate = (certificateId, token) => {
  window.open(
    `${API.defaults.baseURL}/certificates/download/${certificateId}?token=${token}`,
    "_blank"
  );
};