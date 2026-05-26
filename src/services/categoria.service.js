const { pool } = require('../db/connection')

class CategoriaService {
    async get() {
        const sql =
            `SELECT cat_id id, cat_descripcion descripcion
               FROM categoria`
        const [rows] = await pool.query(sql)
        return rows
    }

    async post(categoria) {
        const sql =
            `INSERT INTO categoria(cat_descripcion) 
             VALUES(?)`
        
        const [result] = await pool.query(sql, [
            categoria.descripcion,
        ])

        return {
            id: result.insertId,
            descripcion: categoria.descripcion
        }
    }
}

module.exports = CategoriaService