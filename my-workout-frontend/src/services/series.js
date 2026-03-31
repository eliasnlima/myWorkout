import BASE_URL from "./api"

export async function addSerie(token, id, reps, weight) {
    
    const res = await fetch(`${BASE_URL}/series/${id}`, {
        method: 'POST',
        headers: {
            "Authorization" : `Bearer ${token}`,
            "Content-Type" : "application/json"
        }, 
        body: JSON.stringify({reps, weight})
    })

    if(!res.ok){
        const dataError = await res.json()
        throw new Error(dataError.error || "Erro ao adicionar série!")
    }

    const data = await res.json()
    return data
}

export async function getSeries(token, id) {

    const res = await fetch(`${BASE_URL}/series/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    if(!res.ok){
        const dataError = await res.json()
        throw new Error(dataError.error || "Erro ao buscar series!")
    }

    const data = await res.json()
    return data

}
