import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { deleteExercício, getExercises } from "../services/exercises"
import { addExercicio } from "../services/exercises"
import "../styles/Workout.css"

const Workout = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const location = useLocation()

    const [exercicios, setExercicios] = useState([])
    const [exercicio, setExercicio] = useState("")

    const nomeTreino = location.state?.nomeTreino || `Treino ${id}`

    const showEx = async () => {
        const token = localStorage.getItem("token")
        try {
            const data = await getExercises(token, id)
            setExercicios(data.ex || [])
        } catch (error) {
            console.error("Erro ao buscar exercícios:", error)
        }
    }

    useEffect(() => {
        showEx()
    }, [id])


    const handleExercicio = async (e) => {
        e.preventDefault()

        try {
            const token = localStorage.getItem("token")
            const data = await addExercicio(token, id, exercicio)

            console.log("Exercício cadastrado!", data)
            setExercicio("")
            showEx()
        } catch (error) {
            console.error("Erro ao criar exercício!", error) 
            alert("Falha: ", error.message)
        }

    }

    const handleDelete = async (id_exercício) => {
        if(!window.confirm("Deseja excluir esse exercício do treino?")){
        }

        try {
            const token = localStorage.getItem("token")
            const delEx = await deleteExercício(token, id_exercício)

            setExercicios(atual => atual.filter(ex => ex.id !== id))
            alert("Exercício excluído com sucesso")
            showEx()

        } catch (error) {
            console.error(error)
            alert("Erro ao excluir treino!", error.message)
        }
    }

    const series = (id, nome) => {
        navigate(`/serie/${id}`, { state: {nomeExercicio: nome}} )
    }

    return (
        <div className="workout-container">
            <div className="workout-content">
                <div className="top">
                    <h1>{nomeTreino}</h1>
                    <button className="btn-voltar" onClick={() => navigate("/Dashboard")}>Voltar</button>
                </div>

                <form onSubmit={handleExercicio} className="add-exercise-form">
                    <label htmlFor="exercicio">Adicionar exercício</label>
                    <input type="text" id="exercicio" placeholder="Nome do novo exercício..." value={exercicio} onChange={(e) => setExercicio(e.target.value)} required />
                    <button type="submit" className="btn-add">+ Adicionar</button>
                </form>

                <h2>Exercícios do treino</h2>
                
                <div className="exercicios">
                    {(!exercicios || exercicios.length === 0) ? (
                        <p className="empty-message">Nenhum exercício cadastrado neste treino.</p>
                    ) : (
                        exercicios.map((item) => (
                            <div key={item.id} className="exercise-item" onClick={() => series(item.id, item.nome)}>
                                <h3>{item.nome}</h3>
                                <button className="btn-excluir" onClick={(e) => { 
                                        e.stopPropagation(); 
                                        handleDelete(item.id); 
                                    }}>Excluir</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Workout