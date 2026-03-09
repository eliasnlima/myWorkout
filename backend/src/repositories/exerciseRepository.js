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

    async deleteExercise(ex){
        const res = await pool.query('DELETE FROM exercises WHERE id = $1 AND id_workout = $2 RETURNING *', [ex.id, ex.id_workout])

        return res.rows[0]
    }

    async editExercise(ex){

        const res = await pool.query("UPDATE exercises SET nome = $1 WHERE id = $2 AND id_workout = $3 RETURNING *", [ex.nome, ex.id, ex.id_workout])

        return res.rows[0]
    }
}

export default new exerciseRepository()