import { Router } from 'express'
import userController from '../controllers/userController.js'

const userRoutes = new Router()

userRoutes.post('/user', userController.create)

export default userRoutes