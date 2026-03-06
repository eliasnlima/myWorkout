import workoutRepository from "../repositories/workoutRepository.js"

export async function createWorkout({nome, id_user}) {
    
    if(!nome){
        throw new Error("Preencha o nome do treino!")
    }

    if(!id_user){
        throw new Error("Usuário não encontrado!")
    }
    
    const newWork = await workoutRepository.createWork({nome, id_user})

    return newWork
}

export async function showWorks({id_user}) {
    
    if(!id_user){
        throw new Error("Usuário não encontrado")
    }

    const works = await workoutRepository.showWorks({id_user})

    return works
}