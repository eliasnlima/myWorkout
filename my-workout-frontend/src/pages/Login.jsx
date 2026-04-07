import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate} from 'react-router-dom'
import "../styles/Login.css"


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
    
    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Bem-vindo ao myWorkout</h2>
                <p>Faça login para acessar seus treinos</p>
                
                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-group">
                        <label htmlFor="username">Usuário</label>
                        <input type="text" id="username" placeholder="Digite seu usuário..." value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Digite sua senha..." value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    </div>

                    <button type="submit" className="btn-login">Entrar</button>
                </form>

                <div className="register-section" style={{ marginTop: '20px', borderTop: '1px solid #4a505c', paddingTop: '20px' }}>
                    <p style={{ marginBottom: '10px' }}>Não tem uma conta?</p>
                    <button type="button" className="btn-register" onClick={() => navigate("/NewUser")}>Cadastre-se</button>
                </div>
            </div>
        </div>
    )
}


export default Login;