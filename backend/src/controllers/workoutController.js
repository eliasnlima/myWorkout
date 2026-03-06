import { createWorkout, showWorks } from "../services/workoutService.js"

class workoutController {

    async create(req, res) {

        try {
            const { nome } = req.body
            const id_user = req.userId

            const work = await createWorkout({ nome, id_user })

            return res.status(200).json({ work })

        }
        catch (err) {
            res.status(400).json({ error: err.message })
        }
    }

    async show(req, res) {
        try {
            const id_user = req.userId

            const works = await showWorks({ id_user })

            res.status(200).json({ works })
        } catch (err) {
            res.status(400).json({ error: err.message })
        }

    }
}

export default new workoutController()