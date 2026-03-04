import { Router } from 'express'
import userController from '../controllers/userController.js'
import loginController from '../controllers/loginController.js'

const userRoutes = new Router()

userRoutes.post('/user', userController.create)
userRoutes.post('/login', loginController.login)

export default userRoutes