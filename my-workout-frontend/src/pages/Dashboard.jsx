import { useState, useEffect } from "react";
import { getWorkouts } from "../services/workouts";

const Dashboard = () => {

    const [workouts, setWorkouts] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const token = localStorage.getItem("token")

            const data = await getWorkouts(token)

            setWorkouts(data.works)
        }

        fetchData()

    }, [])


    return (<>
        <h1>Meu Dashboard</h1>
        <h2>Treinos</h2>

        <pre>{JSON.stringify(workouts, null, 2)}</pre>
    </>)
}

export default Dashboard;