import { useParams, useLocation } from "react-router-dom"


const Series = () => {

    const {id} = useParams()
    const location = useLocation()

    const nomeExercicio = location.state?.nomeExercicio


    return (<>
        <h1>{nomeExercicio}</h1>
    </>)
}

export default Series