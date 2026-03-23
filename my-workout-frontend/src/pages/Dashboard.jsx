import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getWorkouts } from "../services/workouts";

const Dashboard = () => {

    const [workouts, setWorkouts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        const fetchData = async () => {

            const token = localStorage.getItem("token")

            const data = await getWorkouts(token)

            setWorkouts(data.works)
        }

        fetchData()

    }, [])

    const novoTreino = () => {

        navigate("/NewWorkout")
    }


    return (<>
        <div className="top">
        <h1>Meu Dashboard</h1>
        <button className="btn-novo-treino" onClick={novoTreino}>Novo Treino</button>
        </div>
        <h2>Treinos</h2>

        <div className="treinos">
            
                {workouts.map((item) => (
                    <div key={item.id} className="treino-item">
                        <h3>{item.nome}</h3>
                    </div>
                ))}
        </div>
    </>)
}

export default Dashboard;