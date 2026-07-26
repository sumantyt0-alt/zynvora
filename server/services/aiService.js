import Groq from "groq-sdk";


console.log(
  "Groq Key Loaded:",
  process.env.GROQ_API_KEY ? "YES" : "NO"
);


const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});



export const askAI = async (message) => {

  try {


    const completion =
      await groq.chat.completions.create({

        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: message,
          },
        ],

        temperature: 0.7,

      });



    return completion.choices[0]
      .message.content;



  } catch(error){


    console.log(
      "Groq Error:",
      error.message
    );


    throw error;

  }

};