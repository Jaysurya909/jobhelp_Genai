const express = require('express')
const dns = require('dns');
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())

const authRouter = require('./routes/auth.routes')

app.use("/api/auth",authRouter)

module.exports = app