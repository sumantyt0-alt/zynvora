import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const askAssistant = async (message) => {
  const res = await API.post("/assistant/chat", {
    message,
  });

  return res.data.reply;
};