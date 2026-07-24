import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI =
new GoogleGenerativeAI(
 process.env.GEMINI_API_KEY
);


export const chatAssistant = async(req,res)=>{

try{

const {message}=req.body;


if(!message){
return res.status(400).json({
success:false,
message:"Message required"
});
}



const model =
genAI.getGenerativeModel({
model:"gemini-2.5-flash"
});



const result =
await model.generateContent(message);



const reply =
result.response.text();



res.json({

success:true,
reply

});



}catch(error){

console.log(error.message);


res.status(500).json({

success:false,
message:"AI server error"

});

}

};