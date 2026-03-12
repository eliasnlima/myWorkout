import pool from '../config/data.js'

class seriesRepository{

    async createSerie(s){
        const res = await pool.query("INSERT INTO series (reps, weight, id_exercise) VALUES ($1, $2, $3) RETURNING id, reps, weight, data, id_exercise", [s.reps, s.weight, s.id_exercise ])

        return res.rows[0]
    }

    async showSeries(id){
        const res = await pool.query("SELECT * FROM series WHERE id_exercise = $1", [id])

        return res.rows
    }
}

export default new seriesRepository()