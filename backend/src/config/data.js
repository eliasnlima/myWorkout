import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
    connectionString: process.env.CONNECTION_DATA
})

pool.connect()
    .then(() => {
        console.log("Database connected!")
    })
    .catch((err) => {
        console.error(err)
    })

export default pool