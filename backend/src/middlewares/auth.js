import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export default (req, res, next) => {

    const authHeader = req.headers.authorization

    if(!authHeader){
        res.status(401).json({message: "Token não inserido!"})
    }

    const [, token ] = authHeader.split(' ')

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.userId = decoded.id 

        return next()

    } catch (err){
        res.status(401).json({message: err.message})
    }
}