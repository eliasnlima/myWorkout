import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastro } from "../services/auth";
import "../styles/Login.css"; 

const NewUser = () => {
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCadastro = async (e) => {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        setLoading(true);

        try {
            await cadastro(username, senha);
            alert("Usuário cadastrado com sucesso!");
            navigate("/"); 
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            alert("Erro: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="top" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <button className="btn-voltar" onClick={() => navigate(-1)}>Voltar</button>
                    <h2 style={{ margin: 0 }}>Criar Conta</h2>
                </div>
                <p>Preencha os dados abaixo para se cadastrar no myWorkout</p>
                
                <form onSubmit={handleCadastro} className="login-form">
                    <div className="input-group">
                        <label htmlFor="username">Usuário</label>
                        <input 
                            type="text" 
                            id="username" 
                            placeholder="Escolha seu usuário..." 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="senha">Senha</label>
                        <input 
                            type="password" 
                            id="senha" 
                            placeholder="Crie uma senha..." 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirmarSenha">Confirmar Senha</label>
                        <input 
                            type="password" 
                            id="confirmarSenha" 
                            placeholder="Repita a senha..." 
                            value={confirmarSenha} 
                            onChange={(e) => setConfirmarSenha(e.target.value)} 
                            required 
                        />
                    </div>

                    <button type="submit" className="btn-login" disabled={loading}>
                        {loading ? "Cadastrando..." : "Finalizar Cadastro"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewUser