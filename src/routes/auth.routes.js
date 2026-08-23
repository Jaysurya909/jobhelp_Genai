const {Router} = require('express')
const authRouter = Router();
const authController = require('../controllers/auth.controller')

authRouter.post('/register',authController.registerUserController)

authRouter.post('/login',authController.loginUserController)

authRouter.get('/logout',authController.logoutUserController)

module.exports = authRouter