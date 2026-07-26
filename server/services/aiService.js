import OpenAI from "openai";

console.log(
  "Grok Key Loaded:",
  process.env.XAI_API_KEY ? "YES" : "NO"
);

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: "https://api.x.ai/v1",
});

export const askAI = async (message) => {
  try {

    const completion = await client.chat.completions.create({

      model: "grok-3-mini",

      messages: [
        {
          role: "user",
          content: message,
        },
      ],

    });


    return completion.choices[0].message.content;


  } catch (error) {

    console.log("Grok Error:", error.message);
    throw error;

  }
};