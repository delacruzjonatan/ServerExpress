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
            throw new Error(`La categoria ${categoria} no existe`)
        }         
    }

    post(categoria, producto) {
        productos.infoProductos[categoria].push(producto)
        return producto
    }
}

module.exports = ProductoService