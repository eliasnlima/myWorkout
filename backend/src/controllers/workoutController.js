import createWorkout from "../services/workoutService.js"

class workoutController{
    
    async create(req, res){

        try {  
            const {nome} = req.body
            const id_user = req.userId

            const work = await createWorkout({nome, id_user})

            return res.status(200).json({work})

        }
        catch (err){
            res.status(400).json({error: err.message})
        }
    }
}

export default new workoutController()