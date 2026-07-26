import { askAI } from "../services/aiService.js";


// ==========================
// Generate AI Notes
// ==========================

export const generateNotes = async (req,res)=>{

try{


const {topic}=req.body;


if(!topic || !topic.trim()){

return res.status(400).json({

success:false,

message:"Topic is required"

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
- Add interview questions
- End with summary


Make professional learning notes.

`;



const notes = await askAI(prompt);



res.json({

success:true,

notes

});



}catch(error){


console.log(
"Notes Error:",
error.message
);



res.status(500).json({

success:false,

message:"Unable to generate notes"

});


}


};