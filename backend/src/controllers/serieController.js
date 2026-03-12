import { createSerie, editSeries, showSeries } from "../services/seriesService.js"

class serieController {

    async create(req, res) {

        try {
            const { reps, weight } = req.body
            const { id_exercise } = req.params
            const id_user = req.userId

            const newSerie = await createSerie({ reps, weight, id_exercise, id_user })

            res.status(201).json({ newSerie })
        }
        catch (err) {
            res.status(400).json({ error: err.message })
        }
    }

    async show(req, res) {

        try {
            const { id_exercise } = req.params
            const id_user = req.userId

            const series = await showSeries({ id_exercise, id_user })

            res.status(200).json({ series })
        }
        catch (err) {
            res.status(400).json({ error: err.message })
        }

    }

    async edit(req, res) {
        try {
            const { id } = req.params
            const { reps, weight, id_exercise} = req.body
            const id_user = req.userId

            const serie = await editSeries({ reps, weight, id, id_exercise, id_user })

            res.status(200).json({ serie })
        }
        catch (err) {
            res.status(400).json({ error: err.message })
        }
    }
}

export default new serieController()