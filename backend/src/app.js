import express from 'express'
import userRoutes from './routes/userRoutes.js'
import workoutRoutes from './routes/workoutRoutes.js'
import exRoutes from './routes/exerciseRoutes.js'
import serieRoutes from './routes/serieRoutes.js'
import cors from 'cors'

class App{
    constructor(){
        this.server = express()

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())
        this.server.use(cors())
    }

    routes(){
        this.server.use(userRoutes)
        this.server.use(workoutRoutes)
        this.server.use(exRoutes)
        this.server.use(serieRoutes)
    }
}

export default new App().server