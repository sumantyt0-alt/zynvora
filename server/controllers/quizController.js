import Quiz from "../models/Quiz.js";


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