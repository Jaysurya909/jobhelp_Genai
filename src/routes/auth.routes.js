const {Router} = require('express')
const authRouter = Router();
const authController = require('../controllers/auth.controller')

authRouter.post('/register',authController.registerUserController)

authRouter.post('/login',authController.loginUserController)

module.exports = authRouter