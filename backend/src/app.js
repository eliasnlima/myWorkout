import express from 'express'
import userRoutes from './routes/userRoutes.js'

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
    }
}

export default new App().server