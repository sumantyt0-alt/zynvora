import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const generateQuiz = async (
  topic,
  difficulty = "Medium",
  questions = 10
) => {
  const { data } = await API.post("/quiz/generate", {
    topic,
    difficulty,
    questions,
  });

  return data.quiz;
};