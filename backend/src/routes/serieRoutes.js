import { Router } from 'express'
import serieController from '../controllers/serieController.js'

const serieRoutes = new Router()

serieRoutes.post("/exercise/:id_exercise", serieController.create)

export default serieRoutes