//Rutas de Categoria
const express = require('express')
const productos = require('../data/productos')

const categoriasRouter = express.Router()

categoriasRouter.post('/', (req, res) => {
    const body = req.body
    const categorias = productos.infoProductos
    productos.infoProductos = {
        categorias,
        body
    }
    res.statusCode = 201
    res.end(JSON.stringify(body))    
})

module.exports = categoriasRouter