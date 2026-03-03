import pool from '../config/data.js'

class userRepository {

    async create(user) {

        const res = await pool.query('INSERT INTO users (username, senha) VALUES ($1, $2) RETURNING *', [user.username, user.senha])

        return res.rows[0]
    }
}

export default new userRepository()