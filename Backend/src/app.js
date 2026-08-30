const express = require('express')
const dns = require('dns');
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


const authRouter = require('./routes/auth.routes')

app.use("/api/auth",authRouter)

module.exports = app