import axios from "axios";


export const chatAssistant = async (req,res)=>{

    try{

        const {message}=req.body;


        if(!message){
            return res.status(400).json({
                success:false,
                message:"Message required"
            });
        }



        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model:"google/gemini-2.0-flash-exp:free",

                messages:[
                    {
                        role:"system",
                        content:
                        "You are Zynvora AI learning assistant. Help students with coding, courses, notes and education."
                    },

                    {
                        role:"user",
                        content:message
                    }
                ]
            },
            {
                headers:{

                    Authorization:
                    `Bearer ${process.env.OPENROUTER_API_KEY}`,

                    "Content-Type":
                    "application/json"
                }
            }
        );


        const reply =
        response.data.choices[0].message.content;


        res.json({

            success:true,
            reply

        });


    }catch(error){

        console.log(
            error.response?.data || error.message
        );


        res.status(500).json({

            success:false,
            message:"AI server error"

        });

    }

};