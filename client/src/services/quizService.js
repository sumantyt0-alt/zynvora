import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
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