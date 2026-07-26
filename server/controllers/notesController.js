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

Create professional and detailed study notes on the topic:

"${topic}"

Instructions:
- Use clear headings.
- Use bullet points.
- Explain concepts in simple English.
- Include real-life examples wherever possible.
- Mention important interview questions at the end.
- End with a short summary.
- Return plain text only.
- Do not use markdown code blocks.

Generate complete notes now.
`;

    const notes = await askAI(prompt);

    return res.status(200).json({
      success: true,
      notes,
    });

  } catch (error) {
    console.error("Notes Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to generate notes",
    });
  }
};