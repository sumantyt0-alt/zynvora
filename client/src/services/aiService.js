import API from "./api";

export const askAI = async (message) => {
  const token = localStorage.getItem("token");

  try {
    const response = await API.post(
      "/ai/chat",
      { message },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;

  } catch (error) {
    console.log("AI API ERROR:", error.response?.data || error.message);
    throw error;
  }
};

export const getChats = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/ai/chats", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getChatById = async (id) => {
  const token = localStorage.getItem("token");

  const response = await API.get(`/ai/chats/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};