import API from "./api";

export const generateCertificate = async (courseId, token) => {
  const { data } = await API.post(
    "/certificates/generate",
    { courseId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const downloadCertificate = async (certificateId, token) => {
  const response = await API.get(
    `/certificates/download/${certificateId}`,
    {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");

  link.href = url;
  link.download = "certificate.pdf";

  document.body.appendChild(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(url);
};