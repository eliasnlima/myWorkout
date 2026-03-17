import BASE_URL from "./api.js";

export async function login(username, senha) {
    
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({username, senha})
    })

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erro ao fazer login"); 
    }

    const data = await res.json()

    return data
    
}