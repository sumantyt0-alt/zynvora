import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    questions: [
      {
        question: {
          type: String,
          required: true,
        },

        options: [
          {
            type: String,
          },
        ],

        correctAnswer: {
          type: String,
          required: true,
        },
      },
    ],

    passingScore: {
      type: Number,
      default: 60,
    },
  },
  {
    timestamps: true,
  }
);


const Quiz = mongoose.model("Quiz", quizSchema);


export default Quiz;