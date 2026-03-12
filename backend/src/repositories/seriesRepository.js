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

    async editSeries(reps, weight, id, id_exercise){
        
        const res = await pool.query('UPDATE series SET reps = $1 , weight = $2 WHERE id = $3 AND id_exercise = $4 RETURNING *', [reps, weight, id, id_exercise])

        return res.rows[0]
    }

    async deleteSeries(id, id_exercise){
        
        const res = await pool.query('DELETE FROM series WHERE id = $1 AND id_exercise = $2 RETURNING *', [id, id_exercise])

        return res.rows[0]
    }

}

export default new seriesRepository()