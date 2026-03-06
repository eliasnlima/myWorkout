import { Router } from 'express'
import workoutController from '../controllers/workoutController.js'
import auth from '../middlewares/auth.js'

const workoutRoutes = new Router()


workoutRoutes.use(auth)

workoutRoutes.post('/workout', workoutController.create)
workoutRoutes.get('/workout', workoutController.show)
workoutRoutes.put('/workout/edit/:id', workoutController.edit)
workoutRoutes.delete('/workout/delete/:id', workoutController.delete)

export default workoutRoutes