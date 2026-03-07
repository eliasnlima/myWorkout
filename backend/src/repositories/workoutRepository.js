import pool from "../config/data.js"

class workoutRepository{

    async createWork(work){
        const res = await pool.query('INSERT INTO workouts (nome, id_user) values ($1, $2) RETURNING *', [work.nome, work.id_user])

        return res.rows[0]
    }

    async showWorks(work){

        const res = await pool.query('SELECT * FROM workouts WHERE id_user = $1', [work.id_user])

        return res.rows
    }

    async editWork(work){

        const res = await pool.query('UPDATE workouts SET nome = $1 WHERE id = $2 AND id_user = $3 RETURNING *', [work.nome, work.id, work.id_user])

        return res.rows[0]
    }

    async deleteWork(work){

        const res = await pool.query('DELETE FROM workouts WHERE id = $1 AND id_user = $2 RETURNING *', [work.id, work.id_user])

        return res.rows[0]
    }

    async searchById(id){

        const res = await pool.query('SELECT * FROM workouts WHERE id= $1', [id])

        return res.rows[0]
    }
}

export default new workoutRepository()