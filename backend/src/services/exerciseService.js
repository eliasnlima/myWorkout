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

export async function deleteEx({id, id_user}) {
    
    if(!id){
        throw new Error("Id do exercício precisa ser inserido!")
    }

   if(!id_user){
        throw new Error("Id do usuário necessário!")
   }

    const delEx = await exerciseRepository.deleteExercise(id, id_user)

    if(!delEx){
        throw new Error("Exercício não encontrado ou sem permissão para deletar!")
    }

    return delEx
}

export async function editEx({nome, id, id_workout, id_user}) {
    
    if(!id){
        throw new Error("Id do exercício precisa ser inserido!")
    }
    if(!nome){
        throw new Error("Nome do exercício precisa ser preenchido!")
    }

    const workout = await workoutRepository.searchById(id_workout)
    if(!workout){
        throw new Error("Treino não encontrado!")
    }
    if(workout.id_user !== id_user){
        throw new Error("Você não tem autorização para editar esse treino!")
    }

    const attEx = await exerciseRepository.editExercise({nome, id, id_workout})

    return attEx
}