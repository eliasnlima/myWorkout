import userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default async function login(username, senha) {
    
    if(!username || !senha){
        throw new Error("Username e senha precisam ser preenchidos!")
    }

    const user = await userRepository.findByName(username)
    if(!user){
        throw new Error("Usuário não encontrado!")
    }

    const senhaLogin = await bcrypt.compare(senha, user.senha)
    if(!senhaLogin){
        throw new Error("Senha incorreta!")
    }

    const token = jwt.sign({ id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn: '7d'})

    return { user: {id: user.id, username: user.username}, token}
}