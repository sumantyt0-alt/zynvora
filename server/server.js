import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import assistantRoutes from "./routes/assistantRoutes.js";
dotenv.config();

connectDB();

const app = express();

// Middleware FIRST
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://zynvora-seven.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

// Routes AFTER middleware
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/assistant",assistantRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/progress", progressRoutes);
app.get("/", (req, res) => {
  res.send("🚀 Zynvora Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
console.log("Gemini Key Loaded:", !!process.env.GEMINI_API_KEY);
app.use(
"/api/quiz",
quizRoutes
);