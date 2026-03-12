import exerciseRepository from "../repositories/exerciseRepository.js"
import seriesRepository from "../repositories/seriesRepository.js"

export async function createSerie({reps, weight, id_exercise, id_user}) {
    if(!reps || !weight || !id_exercise){
        throw new Error("Preencha todos os campos!")
    }

    const ex = await exerciseRepository.findIdAndUser(id_exercise, id_user)

    if(!ex){
        throw new Error("Ex não encontrado ou não tem autorização para acessar exercício!")
    }

    const serie = await seriesRepository.createSerie({reps, weight, id_exercise})

    return serie 
}

export async function showSeries({id_exercise, id_user}) {
    if(!id_exercise){
        throw new Error("Preencha todos os campos!")
    }

    const ex = await exerciseRepository.findIdAndUser(id_exercise, id_user)

    if(!ex){
        throw new Error("Ex não encontrado ou não tem autorização para acessar exercício!")
    }

    const serie = await seriesRepository.showSeries(id_exercise)

    return serie 
}