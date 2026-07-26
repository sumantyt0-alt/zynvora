import Quiz from "../models/Quiz.js";
import { askAI } from "../services/aiService.js";



// ==========================
// Get Quiz By Course
// ==========================

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




// ==========================
// Submit Quiz
// ==========================

export const submitQuiz = async(req,res)=>{

    try{


        const {answers}=req.body;



        const quiz = await Quiz.findById(
            req.params.quizId
        );



        let score = 0;



        quiz.questions.forEach((q,index)=>{


            if(q.correctAnswer === answers[index]){

                score++;

            }


        });



        const percentage =
        (score / quiz.questions.length) * 100;



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




// ==========================
// Generate AI Quiz
// ==========================

export const generateQuiz = async(req,res)=>{


try{


const {
    topic,
    difficulty,
    questions
} = req.body;



if(!topic){

return res.status(400).json({

success:false,

message:"Topic is required"

});

}



const prompt = `

Generate ${questions || 10} multiple choice questions.

Topic:
${topic}


Difficulty:
${difficulty || "Medium"}



Rules:

1. Return ONLY valid JSON.
2. Exactly 4 options.
3. Only one correct answer.
4. No markdown.
5. Add short explanation.


Format:


[
 {
  "question":"",
  "options":[
   "",
   "",
   "",
   ""
  ],
  "answer":"",
  "explanation":""
 }
]

`;



const text = await askAI(prompt);



const quiz = JSON.parse(

text
.replace(/```json/g,"")
.replace(/```/g,"")
.trim()

);



res.json({

success:true,

quiz

});



}catch(error){


console.log(
"Quiz Error:",
error.message
);



res.status(500).json({

success:false,

message:"Quiz generation failed"

});


}


};