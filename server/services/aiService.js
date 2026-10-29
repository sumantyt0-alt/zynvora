import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-120b";

// string bhi chalega, messages ka array bhi
const toMessages = (input) =>
  typeof input === "string" ? [{ role: "user", content: input }] : input;

// Pehle jaisa: poora jawab ek saath
export const askAI = async (input) => {
  try {
    const completion = await groq.chat.completions.create({
      model: MODEL,
      messages: toMessages(input),
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.log("Groq Error:", error.message);
    throw error;
  }
};

// Naya: jawab tukdon (tokens) mein
export const streamAI = async (input, onToken) => {
  try {
    const stream = await groq.chat.completions.create({
      model: MODEL,
      messages: toMessages(input),
      temperature: 0.7,
      stream: true,
    });

    let full = "";

    for await (const chunk of stream) {
      const token = chunk.choices?.[0]?.delta?.content || "";
      if (token) {
        full += token;
        onToken(token);
      }
    }

    return full;
  } catch (error) {
    console.log("Groq Stream Error:", error.message);
    throw error;
  }
};