import Quiz from "../models/Quiz.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);


// Get quiz by course

export const getQuiz = async (req,res)=>{

    try{

        const quiz = await Quiz.findOne({
            course:req.params.courseId
        });

        if(!quiz){
            return res.status(404).json({
                message:"Quiz not found"
            });
        }


        res.json({
            quiz
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// Submit Quiz

export const submitQuiz = async(req,res)=>{

    try{

        const {answers}=req.body;


        const quiz = await Quiz.findById(req.params.quizId);


        let score=0;


        quiz.questions.forEach((q,index)=>{

            if(q.correctAnswer === answers[index]){
                score++;
            }

        });


        const percentage =
        (score / quiz.questions.length)*100;



        res.json({

            score,
            percentage,
            passed:
            percentage >= quiz.passingScore

        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
export const generateQuiz = async (req, res) => {
  try {
    const { topic,
      difficulty,
      questions, }
       = req.body;

    if (!topic) {
      return res.status(400).json({
        success: false,
        message: "Topic is required",
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
    Generate ${questions} multiple choice questions on "${topic}".

    Difficulty: ${difficulty}

    Rules:

    1. Return ONLY valid JSON.
    2. Exactly 4 options.
    3. One correct answer.
    4. No explanation.
    5. explanation should be one short sentence explaining why the answer is correct.

    Format:

    [
      {
        "question": "",
        "options": [
          "",
          "",
          "",
          ""
        ],
        "answer": "",
        "explanation":""
      }
    ]
    `;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    const quiz = JSON.parse(
      text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
    );

    res.json({
      success: true,
      quiz,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Quiz generation failed",
    });
  }
};