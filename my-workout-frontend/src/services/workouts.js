import BASE_URL from "./api"

export async function getWorkouts(token) {

    const res = await fetch(`${BASE_URL}/workout`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    if(!res.ok){
        const dataError = await res.json()
        throw new Error(dataError.error || "Erro ao buscar treinos!")
    }

    const data = await res.json()
    return data

}

export async function createWorkout(token, nome) {
    
    const res = await fetch(`${BASE_URL}/workout`, {
        method: 'POST',
        headers: {
            "Authorization" : `Bearer ${token}`,
            "Content-Type" : "application/json"
        }, 
        body: JSON.stringify({nome})
    })

    if(!res.ok){
        const dataError = await res.json()
        throw new Error(dataError.error || "Erro ao criar treino!")
    }

    const data = await res.json()
    return data
}

export async function deleteWorkout(token, workoutId) {
    const res = await fetch(`${BASE_URL}/workout/delete/${workoutId}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erro ao deletar treino!");
    }

    return res.status !== 204 ? await res.json() : { success: true };
}