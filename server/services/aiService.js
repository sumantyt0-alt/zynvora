import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export const askAI = async (message) => {
  try {
    const completion = await client.chat.completions.create({
      model: "google/gemini-2.5-flash", // Change if your account shows another model
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.log("OpenRouter Error:", error);
    throw error;
  }
};