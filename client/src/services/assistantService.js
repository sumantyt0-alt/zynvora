import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Har request ke saath token apne aap bhejo
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const askAssistant = async (message) => {
  const res = await API.post("/assistant/chat", {
    message,
  });

  return res.data.reply;
};