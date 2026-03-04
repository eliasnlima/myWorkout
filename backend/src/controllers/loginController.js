import login from "../services/loginService.js"

class LoginController{

    async login(req, res){

        try {
            const { username, senha } = req.body

            const newLogin = await login(username, senha)

            return res.status(200).json({ newLogin })
            
        } catch (err){
            return res.status(400).json({ error: err.message})
        }
        
    }
}

export default new LoginController()