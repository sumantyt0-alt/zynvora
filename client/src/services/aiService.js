import API from "./api";


export const askAI = async (message) => {

  const token = localStorage.getItem("token");


  const response = await API.post(
    "/ai/chat",
    {
      message,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


  return response.data;

};