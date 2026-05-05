const productos = require('../data/productos')

class ProductoService {
    constructor() {
        this.productos = productos.infoProductos
    }

    get() {
        return productos.infoProductos
    }

    getProductoPorCategoria(categoria) {
        const productosCategoria = productos.infoProductos[categoria]
        if(productosCategoria) {
            return productosCategoria
        } else {
            const error = new Error(`La categoria ${categoria} no existe`)
            error.status = 404
            throw error
        }         
    }

    post(categoria, producto) {
        productos.infoProductos[categoria].push(producto)
        return producto
    }
}

module.exports = ProductoService