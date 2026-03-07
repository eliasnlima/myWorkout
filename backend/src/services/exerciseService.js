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