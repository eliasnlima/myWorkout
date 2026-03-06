import { Router } from 'express'
import workoutController from '../controllers/workoutController.js'
import auth from '../middlewares/auth.js'

const workoutRoutes = new Router()


workoutRoutes.use(auth)

workoutRoutes.post('/workout', workoutController.create)
workoutRoutes.get('/workouts', workoutController.show)

export default workoutRoutes