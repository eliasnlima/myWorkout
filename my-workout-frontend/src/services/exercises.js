import { data } from "react-router-dom"
import BASE_URL from "./api"

export async function getExercises(token, id_workout) {

    const res = await fetch(`${BASE_URL}/workout/exercise/${id_workout}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    if(!res.ok){
        const dataError = await res.json()
        throw new Error(dataError.error || "Erro ao buscar exercícios!")
    }

    const data = await res.json()
    return data

}

export async function addExercicio(token, id_workout, nome) {

    const res = await fetch(`${BASE_URL}/workout/exercise/${id_workout}`, {
        method: 'POST',
        headers: {
            "Authorization" : `Bearer ${token}`,
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({nome})
    })

    if(!res.ok){
        const dataError = await res.json()
        throw new Error(dataError.error || "Erro ao adicionar novo exercício!")
    }

    const data = await res.json()
    return data
}

export async function deleteExercício(token, id) {
    const res = await fetch(`${BASE_URL}/exercise/${id}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erro ao deletar exercício!");
    }

    return res.status !== 204 ? await res.json() : { success: true };
}