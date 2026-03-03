import bcrypt from 'bcrypt'
import userRepository from '../repositories/userRepository.js'

export async function createUserService(username, senha) {

    if (!username | !senha) {
        throw new Error("Preencha todos os campos!")
    }

    const senhaHash = await bcrypt.hash(senha, 10)

    const user = {
        username,
        senha: senhaHash
    }

    const newUser = await userRepository.create(user)

    return newUser

}
