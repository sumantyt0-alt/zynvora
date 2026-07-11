import API from "./api";

export const getAdminDashboard = async (token) => {
  const response = await API.get("/dashboard/admin", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};