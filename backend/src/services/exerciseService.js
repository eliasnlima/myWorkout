import exerciseRepository from "../repositories/exerciseRepository.js"
import workoutRepository from "../repositories/workoutRepository.js"


export async function createEx({nome, id_workout, id_user}) {
    if(!nome){
        throw new Error("Preencha o nome do exercício!")
    }
    if(!id_workout){
        throw new Error("Treino não encontrado!")
    }

    const workout = await workoutRepository.searchById(id_workout)
    if(!workout || workout.id_user !== id_user){
        throw new Error("Você não tem autorização para adicionar exercícios nesse treino!")
    }
    
    const newEx = await exerciseRepository.createExercise({nome, id_workout})

    return newEx
}

export async function showEx({id_workout, id_user}) {
    
    const workout = await workoutRepository.searchById(id_workout)
    
    if(!workout){
        throw new Error("Treino não encontrado!")
    }
    if(workout.id_user !== id_user){
        throw new Error("Você não tem permissão para acessar os treinos desse exercício!")
    }

    const ex = await exerciseRepository.showExercise({id_workout})

    return ex
}