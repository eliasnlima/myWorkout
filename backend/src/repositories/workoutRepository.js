import pool from "../config/data.js"

class workoutRepository{

    async createWork(work){
        const res = await pool.query('INSERT INTO workouts (nome, id_user) values ($1, $2) RETURNING *', [work.nome, work.id_user])

        return res.rows[0]
    }
}

export default new workoutRepository()