import express from "express";

import {
    chatAssistant
}
from "../controllers/assistantController.js";


const router = express.Router();


router.post(
    "/chat",
    chatAssistant
);


export default router;