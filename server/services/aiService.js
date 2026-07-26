import { GoogleGenerativeAI } from "@google/generative-ai";
console.log("🔥 USING GEMINI 2.0 FLASH SERVICE");
console.log(
  "Gemini Key:",
  process.env.GEMINI_API_KEY
    ? process.env.GEMINI_API_KEY.substring(0, 10)
    : "MISSING"
);

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export const askAI = async (message) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const result = await model.generateContent(message);

    return result.response.text();

  } catch (error) {
    console.log("Gemini Error:", error.message);
    throw error;
  }
};