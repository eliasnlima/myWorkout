import express from 'express'
import userRoutes from './routes/userRoutes.js'
import workoutRoutes from './routes/workoutRoutes.js'
import exRoutes from './routes/exerciseRoutes.js'

class App{
    constructor(){
        this.server = express()

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())
    }

    routes(){
        this.server.use(userRoutes)
        this.server.use(workoutRoutes)
        this.server.use(exRoutes)
    }
}

export default new App().server