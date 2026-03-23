import { useEffect, useState } from "react"
import { createWorkout } from "../services/workouts"
import { useNavigate } from "react-router-dom"

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

    return (<>
        <div className="top">
        <h1>Criar novo treino</h1>
        <button onClick={dashboard}>Voltar</button>
        </div>

        <div>
            <form onSubmit={create}>
                <input type="text" placeholder="Nome do treino..." value={nomeTreino} onChange={(e) => setNomeTreino(e.target.value)}></input>
                <button type="submit">Criar</button>
                {mensagem && <p className="message">{mensagem}</p>}
            </form>
        </div>
    </>)
}

export default NewWorkout