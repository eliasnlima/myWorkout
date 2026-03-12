import { Router } from 'express'
import serieController from '../controllers/serieController.js'

const serieRoutes = new Router()

serieRoutes.post("/series/:id_exercise", serieController.create)
serieRoutes.get('/series/:id_exercise', serieController.show)
serieRoutes.put('/series/:id', serieController.edit)

export default serieRoutes