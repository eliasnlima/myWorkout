import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate} from 'react-router-dom'


const Login = () => {

    const [username, setUsername] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const data = await login(username, senha);
            console.log("Login realizado com sucesso!", data);
            
            localStorage.setItem("token", data.newLogin.token)
            navigate("/Dashboard")

        } catch (error) {
            console.error("Erro capturado:", error);
            alert("Falha: " + error.message);
        }
    }
    
    return (<>

        <form onSubmit={handleLogin}>
            <p>Username</p>
            <input type="text" value={username} onChange={ (e) => {setUsername(e.target.value)}}></input>

            <p>Senha</p>
            <input type="password" value={senha} onChange={(e) => {setSenha(e.target.value)}}></input>

            <button type="submit">Entrar</button>
        </form>


    </>)
}


export default Login;