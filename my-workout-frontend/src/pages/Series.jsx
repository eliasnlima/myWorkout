import { useState } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { addSerie, getSeries, deleteSerie } from "../services/series"
import { useEffect } from "react"
import "../styles/Series.css"


const Series = () => {

    const {id} = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const [series, setSeries] = useState([])
    const [reps, setReps] = useState("")
    const [peso, setPeso] = useState("")
    const [filtroData, setFiltroData] = useState("")

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

    const formatarData = (dataString) => {
        if (!dataString) return "";
        const [ano, mes, dia] = dataString.split("T")[0].split("-");
        return `${dia}/${mes}/${ano}`;
    };

    const datasUnicas = [...new Set(series.map(item => item.data?.split("T")[0]))].filter(Boolean).sort().reverse();

    const seriesFiltradas = (filtroData
        ? series.filter(item => item.data?.split("T")[0] === filtroData)
        : series
    ).sort((a, b) => {
        return new Date(b.data).getTime() - new Date(a.data).getTime();
    });

    return (
        <div className="series-container" translate="no">
            <div className="series-content">
                <div className="top">
                    <button className="btn-voltar" onClick={voltar}>Voltar</button>
                    <h1>{nomeExercicio}</h1>
                </div>

                <form onSubmit={add} className="add-series-form">
                    <div className="input-group">
                        <label htmlFor="reps">Repetições</label>
                        <input type="text" id="reps" placeholder="Ex: 12" value={reps} onChange={(e) => setReps(e.target.value)} required />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="peso">Peso (kg)</label>
                        <input type="text" id="peso" placeholder="Ex: 60" value={peso} onChange={(e) => setPeso(e.target.value)} required />
                    </div>

                    <button type="submit" className="btn-add">+ Adicionar</button>
                </form>

                <div className="series-list-header">
                    <h2>Histórico</h2>
                    {series.length > 0 && (
                        <div className="filter-container">
                            <label htmlFor="date-select">Filtrar por dia</label>
                            <select id="date-select" className="filter-select" value={filtroData} onChange={(e) => setFiltroData(e.target.value)}>
                                <option value="">Exibir Tudo</option>
                                {datasUnicas.map(data => (
                                    <option key={data} value={data}>{formatarData(data)}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>

                <div className="series-list">
                    {(seriesFiltradas.length === 0) ? (
                        <p className="empty-message">Nenhuma série cadastrada neste exercício.</p>
                    ) : (
                        seriesFiltradas.map((item) => (
                            <div key={item.id} className="serie-item">
                                <div className="serie-info">
                                    <p><strong>{item.reps}</strong> repetições</p>
                                    <p><strong>{item.weight}</strong> kg</p>
                                    {item.data && <p className="serie-date">{formatarData(item.data)}</p>}
                                </div>
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

export default Series