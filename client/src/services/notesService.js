import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const generateNotes = async (topic) => {
  const res = await API.post("/notes/generate", {
    topic,
  });

  return res.data.notes;
};