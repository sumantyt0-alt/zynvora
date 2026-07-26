import { askAI } from "../services/aiService.js";

// ==========================
// Generate AI Notes
// ==========================
export const generateNotes = async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic || !topic.trim()) {
      return res.status(400).json({
        success: false,
        message: "Topic is required",
      });
    }

    const prompt = `
You are an expert teacher.

Create detailed study notes on:

${topic}

Instructions:

- Use proper headings
- Use bullet points
- Explain in simple English
- Give examples
- Mention important interview questions
- End with a short summary

Output should look like professional notes.
`;

    const notes = await askAI(prompt);

    return res.json({
      success: true,
      notes,
    });

  } catch (error) {
    console.error("Notes Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to generate notes",
    });
  }
};