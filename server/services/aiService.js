import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export const askAI = async (message) => {
  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });


    const result = await model.generateContent(message);


    const response = result.response.text();

    return response;


  } catch (error) {
      console.log("========== GEMINI ERROR ==========");
      console.log(error);
      console.log("Message:", error.message);
      console.log("Status:", error.status);
      console.log("=================================");

      return "AI service error";
    }
};