import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getWorkouts, deleteWorkout } from "../services/workouts";
import "../styles/Dashboard.css";

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

    const handleDelete = async (workoutId) => {
        if (!window.confirm("Tem certeza que deseja excluir este treino? Essa ação não pode ser desfeita.")) {
            return;
        }

        try {
            const token = localStorage.getItem("token");
            await deleteWorkout(token, workoutId);

            setWorkouts(currentWorkouts => currentWorkouts.filter(workout => workout.id !== workoutId));
            
            alert("Treino excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir treino:", error);
            alert(`Falha ao excluir treino: ${error.message}`);
        }
    };

    const itemTreino = (id, nome) => {

        navigate(`/Workout/${id}`, {state: {nomeTreino: nome}})

    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <div className="top">
                    <h1>Meu Dashboard</h1>
                    <button className="btn-novo-treino" onClick={novoTreino}>+ Novo Treino</button>
                </div>
                
                <h2>Meus Treinos</h2>

                <div className="treinos">
                    {workouts.length === 0 ? (
                        <p className="empty-message">Nenhum treino cadastrado. Crie um novo!</p>
                    ) : (
                        workouts.map((item) => (
                            <div key={item.id} className="treino-item" onClick={ () => itemTreino(item.id, item.nome)}>
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

export default Dashboard;