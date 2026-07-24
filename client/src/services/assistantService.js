import axios from "axios";


const API = axios.create({

    baseURL:
    "http://localhost:5000/api"

});



export const askAssistant = async(message)=>{

    const res = await API.post(
        "/assistant/chat",
        {
            message
        }
    );


    return res.data.reply;

};