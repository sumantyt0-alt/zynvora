import mongoose from "mongoose";


const chatSchema = new mongoose.Schema(
{
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    title:{
        type:String,
        default:"New Chat"
    },


    messages:[
        {
            role:{
                type:String,
                enum:["user","assistant"],
                required:true
            },


            content:{
                type:String,
                required:true
            },


            createdAt:{
                type:Date,
                default:Date.now
            }
        }
    ]

},
{
    timestamps:true
}
);


// Latest chats first
chatSchema.index({
    user:1,
    updatedAt:-1
});


export default mongoose.model("Chat",chatSchema);