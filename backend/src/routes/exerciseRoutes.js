import { Router } from 'express'
import exerciseController from '../controllers/exerciseController.js'
import auth from '../middlewares/auth.js'

const exRoutes = new Router()

exRoutes.use(auth)
exRoutes.post('/workout/exercise/:id_workout', exerciseController.create)

export default exRoutes