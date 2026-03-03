import { createUserService } from "../services/userService.js"

class userController {

    async create(req, res) {
        try {
            const { username, senha } = req.body

            const user = await createUserService(username, senha)

            return res.status(201).json({ message: "Usuário criado com sucesso!", user: { id: user.id, username: user.username }})
        }
        catch (err) {
            return res.status(400).json({ error: err.message})
        }

    }
}

export default new userController()