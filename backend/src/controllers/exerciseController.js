import { createEx, showEx, deleteEx, editEx } from "../services/exerciseService.js"

class exerciseController {

    async create(req, res) {
        try {
            const { nome } = req.body
            const { id_workout } = req.params
            const id_user = req.userId

            const exercise = await createEx({ nome, id_workout, id_user })

            return res.status(200).json({ exercise })
        }
        catch (err) {
            res.status(400).json({ error: err.message })
        }
    }

    async show(req, res) {
        try {
            const { id_workout } = req.params
            const id_user = req.userId

            const ex = await showEx({ id_workout, id_user })

            res.status(200).json({ ex })
        } catch (err) {
            res.status(400).json({ error: err.message })
        }

    }

    async delete(req, res) {
        try {
            const { id, id_workout} = req.params
            const id_user = req.userId

            const delEx = await deleteEx({ id, id_workout, id_user })

            res.status(200).json({ delEx })
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    }

    async edit(req, res) {
        try {
            const { id, id_workout } = req.params
            const id_user = req.userId
            
            const {nome} = req.body

            const exercise = await editEx({nome, id, id_workout, id_user })

            res.status(200).json({ exercise })
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    }

}


export default new exerciseController()