import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const generateNotes = async (topic) => {
  const res = await API.post("/notes/generate", {
    topic,
  });

  return res.data.notes;
};