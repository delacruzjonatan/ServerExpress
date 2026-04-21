const express = require('express')
const productos = require('./data/productos')
const productoRouter = require('./routes/producto.router')
const categoriaRouter = require('./routes/categoria.router')

const app = express()

app.use(express.json())
app.use('/productos', productoRouter)
app.use('/categorias', categoriaRouter)

app.get('/', (req, res) => {
    res.end('Servidor desarrollado con express')
})

const puerto = 3000
app.listen(puerto, () =>{
    console.log(`Servidor escuchando en el puerto ${puerto}`)
})