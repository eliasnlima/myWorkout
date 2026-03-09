import { Router } from 'express'
import exerciseController from '../controllers/exerciseController.js'
import auth from '../middlewares/auth.js'

const exRoutes = new Router()

exRoutes.use(auth)
exRoutes.post('/workout/exercise/:id_workout', exerciseController.create)
exRoutes.get('/workout/exercise/:id_workout', exerciseController.show)
exRoutes.delete('/workout/:id_workout/ex/:id/del', exerciseController.delete)
exRoutes.put('/workout/:id_workout/ex/:id/edit', exerciseController.edit)

export default exRoutes