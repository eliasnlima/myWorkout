import workoutRepository from "../repositories/workoutRepository.js"

export default async function createWorkout({nome, id_user}) {
    
    if(!nome){
        throw new Error("Preencha o nome do treino!")
    }

    if(!id_user){
        throw new Error("Usuário não encontrado!")
    }
    
    const newWork = await workoutRepository.createWork({nome, id_user})

    return newWork
}