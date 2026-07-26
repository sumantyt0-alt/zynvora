import Quiz from "../models/Quiz.js";
import { askAI } from "../services/aiService.js";

// ==========================
// Get Quiz By Course
// ==========================
export const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({
      course: req.params.courseId,
    });

    if (!quiz) {
      return res.status(404).json({
        message: "Quiz not found",
      });
    }

    res.json({
      quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Submit Quiz
// ==========================
export const submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;

    const quiz = await Quiz.findById(req.params.quizId);

    let score = 0;

    quiz.questions.forEach((q, index) => {
      if (q.correctAnswer === answers[index]) {
        score++;
      }
    });

    const percentage = (score / quiz.questions.length) * 100;

    res.json({
      score,
      percentage,
      passed: percentage >= quiz.passingScore,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Generate AI Quiz
// ==========================
export const generateQuiz = async (req, res) => {
  try {
    const {
      topic,
      difficulty = "Medium",
      questions = 10,
    } = req.body;

    if (!topic || !topic.trim()) {
      return res.status(400).json({
        success: false,
        message: "Topic is required",
      });
    }

    const prompt = `
Generate exactly ${questions} multiple-choice questions about "${topic}".

Difficulty: ${difficulty}

Return ONLY valid JSON.

Format:

[
  {
    "question": "Question here",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": "Correct Option",
    "explanation": "One short sentence."
  }
]

Rules:
- No markdown
- No code block
- No extra text
- Exactly 4 options
- Exactly one correct answer
- Valid JSON only
`;

    const text = await askAI(prompt);

    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const quiz = JSON.parse(cleaned);

    res.json({
      success: true,
      quiz,
    });
  } catch (error) {
    console.log("Quiz Error:", error);

    res.status(500).json({
      success: false,
      message: "Quiz generation failed",
    });
  }
};