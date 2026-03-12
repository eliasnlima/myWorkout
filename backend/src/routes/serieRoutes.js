import { Router } from 'express'
import serieController from '../controllers/serieController.js'

const serieRoutes = new Router()

serieRoutes.post("/series/:id_exercise", serieController.create)
serieRoutes.get('/series/:id_exercise', serieController.show)
serieRoutes.put('/series/:id', serieController.edit)
serieRoutes.delete('/series/:id_exercise/:id', serieController.deleteSerie)

export default serieRoutes