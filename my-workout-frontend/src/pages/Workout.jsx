import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { getExercises } from "../services/exercises"

const Workout = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const location = useLocation()  

    const [exercicios, setExercicios] = useState([])

    const nomeTreino = location.state?.nomeTreino || `Treino ${id}`
    
    useEffect(() => {

        const token = localStorage.getItem("token")
        const showEx = async () => {

            try {
                const data = await getExercises(token, id)
                setExercicios(data.ex || [])
            } catch (error) {
                console.error("Erro ao buscar exercícios:", error)
            }
        }

        showEx()
    }, [id])


    return (<>
        <div className="top">
            <h1>{nomeTreino}</h1>
            <button onClick={() => navigate("/Dashboard")}>Voltar</button>
            <button className="btn-novo-ex">Adicionar Exercício</button>
        </div>
        <h2>Exercícios do treino</h2>
        <div className="exercicios">
            {exercicios?.map((item) => (
                    <div key={item.id} className="ex-item">
                        <h3>{item.nome}</h3>
                    </div>
                ))}
        </div>
    </>)
}

export default Workout