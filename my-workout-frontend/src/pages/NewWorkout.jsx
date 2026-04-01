import { useEffect, useState } from "react"
import { createWorkout } from "../services/workouts"
import { useNavigate } from "react-router-dom"
import "../styles/NewWorkout.css"

const NewWorkout = () => {

    const [nomeTreino, setNomeTreino] = useState("")
    const [mensagem, setMensagem] = useState("")
    const navigate = useNavigate()

    const create = async (e) => {
        e.preventDefault()

        try {
            const token = localStorage.getItem("token")
            const create = await createWorkout(token, nomeTreino)
            
            console.log("Treino criado com sucesso!", create)
            setMensagem("Treino criado, volte para o menu de treinos!")
            setNomeTreino("") 
        } catch (error) {
            console.error("Erro ao criar treino!", error)
            alert("Falha: ", error.message)
        }
    }

    const dashboard = () => {
        navigate("/Dashboard")
    }

    return (
        <div className="new-workout-container">
            <div className="new-workout-card">
                <div className="top">
                    <button className="btn-voltar" onClick={dashboard}>Voltar</button>
                    <h1>Criar Novo Treino</h1>
                </div>

                <form onSubmit={create} className="new-workout-form">
                    <div className="input-group">
                        <label htmlFor="nomeTreino">Nome do Treino</label>
                        <input type="text" id="nomeTreino" placeholder="Ex: Treino A - Peito e Tríceps..." value={nomeTreino} onChange={(e) => setNomeTreino(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn-criar">Criar Treino</button>
                    {mensagem && <p className="success-message">{mensagem}</p>}
                </form>
            </div>
        </div>
    )
}

export default NewWorkout