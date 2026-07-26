import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://zynvora.vercel.app",
    "X-Title": "Zynvora",
  },
});

export const askAI = async (message) => {
  try {
    const completion = await client.chat.completions.create({
      model: "google/gemini-2.0-flash-001",
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