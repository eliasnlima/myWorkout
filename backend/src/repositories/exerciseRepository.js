import pool from '../config/data.js'

class exerciseRepository{

    async createExercise(ex){
        const res = await pool.query('INSERT INTO exercises (nome, id_workout) VALUES ($1, $2) RETURNING *', [ex.nome, ex.id_workout])

        return res.rows[0]
    }

    async showExercise(ex){

        const res = await pool.query('SELECT * FROM exercises WHERE id_workout = $1', [ex.id_workout])

        return res.rows
    }
}

export default new exerciseRepository()