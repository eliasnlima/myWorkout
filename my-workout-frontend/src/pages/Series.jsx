import { useState } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { addSerie } from "../services/series"


const Series = () => {

    const {id} = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const [series, setSeries] = useState([])
    const [reps, setReps] = useState("")
    const [peso, setPeso] = useState("")

    const nomeExercicio = location.state?.nomeExercicio

    const voltar = () => {
         navigate(-1)
    }

    const add = async (e) => {
        e.preventDefault()
        try {
            
            const token = localStorage.getItem("token")
            const newSerie = await addSerie(token, id, reps, peso)
            console.log("Série adicionada!", newSerie)

        } catch (error) {
            console.error("Erro ao adicionar série", error)
            alert("Erro: " + error.message)
        }
    }

    return (<>
        <div className="top">
            <h1>{nomeExercicio}</h1>
            <button onClick={voltar}>Voltar</button>

            <form onSubmit={add}>
                <span>Repetições:</span>
                <input type="text" placeholder="Quantidade de repetições" value={reps} onChange={(e) => setReps(e.target.value)}/><br />

                <span>Peso:</span>
                <input type="text" placeholder="Peso em kg" value={peso} onChange={(e) => setPeso(e.target.value)}/><br />

                <button type="submit" className="btn-novo-ex">Adicionar Série</button>
            </form>

        </div>
        <h2>Séries</h2>
        
    </>)
}

export default Series