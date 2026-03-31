import { useState } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { addSerie, getSeries, deleteSerie } from "../services/series"
import { useEffect } from "react"


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

    useEffect(() => {
        show()
    }, [id]) 


    const add = async (e) => {
        e.preventDefault()
        try {
            
            const token = localStorage.getItem("token")
            const newSerie = await addSerie(token, id, reps, peso)
            console.log("Série adicionada!", newSerie)
            setReps("")
            setPeso("")
            show()

        } catch (error) {
            console.error("Erro ao adicionar série", error)
            alert("Erro: " + error.message)
        }
    }

    const show = async () => {

        try {
            const token = localStorage.getItem("token")

            const data = await getSeries(token, id)
            setSeries(data.series || []) 

        } catch (error) {
            console.error("Erro ao exibir series!" + error.message)
        }
        
    }

    const handleDelete = async (id_serie) => {
        if(!window.confirm("Deseja excluir essa série?")){
            return;
        }

        try {
            const token = localStorage.getItem("token")
            await deleteSerie(token, id, id_serie) 

            setSeries(atual => atual.filter(s => s.id !== id_serie))
            alert("Série excluída com sucesso")
        } catch (error) {
            console.error(error)
            alert("Erro ao excluir série: " + error.message)
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

        <div className="series">
            
                {series.map((item) => (
                    <div key={item.id} className="serie-item">
                        <p>{item.reps} repetições</p>
                        <p>{item.weight}Kg</p>
                        <p>{item.data}</p>
                        <button className="btn-excluir" onClick={(e) => { 
                            e.stopPropagation(); 
                            handleDelete(item.id); 
                        }}>Excluir</button>
                    </div>
                ))}
        </div>
        
    </>)
}

export default Series