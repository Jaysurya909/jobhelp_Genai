const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const interviewController = require("../controllers/interview.controller")
const interviewRouter = express.Router();
const upload = require("../middleware/file.middleware")

interviewRouter.post("/",authMiddleware.authUser,upload.single("resume"),interviewController.generateInterviewController)



module.exports = interviewRouter