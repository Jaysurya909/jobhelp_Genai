const express = require('express')
const dns = require('dns');
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cookieParser())

const allowedOrigins = [
    "http://localhost:5173",
    "https://jobhelp-genai.vercel.app",
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (e.g. curl, Postman, server-to-server)
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS: " + origin));
    },
    credentials: true,
}))

const authRouter = require('./routes/auth.routes')
const interviewRouter = require("./routes/interview.routes")

app.use("/api/auth",authRouter)
app.use("/api/interview",interviewRouter)

module.exports = app