import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { deleteExercício, getExercises } from "../services/exercises"
import { addExercicio } from "../services/exercises"

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

    return (<>
        <div className="top">
            <h1>{nomeTreino}</h1>
            <button onClick={() => navigate("/Dashboard")}>Voltar</button>

            <form onSubmit={handleExercicio}>
                <input type="text" value={exercicio} onChange={(e) => setExercicio(e.target.value)} />
                <button type="submit" className="btn-novo-ex">Adicionar Exercício</button>
            </form>

        </div>
        <h2>Exercícios do treino</h2>
        <div className="exercicios">
            {exercicios?.map((item) => (
                <div key={item.id} className="ex-item">
                    <h3>{item.nome}</h3>
                    <button className="btn-excluir" onClick={(e) => { 
                            e.stopPropagation(); 
                            handleDelete(item.id); 
                        }}>Excluir</button>
                </div>
            ))}
        </div>
    </>)
}

export default Workout