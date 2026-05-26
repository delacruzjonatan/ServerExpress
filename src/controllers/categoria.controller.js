const CategoriaService = require('../services/categoria.service')

const serviceCategoria = new CategoriaService()

async function getCategoria(req, res, next){
    try {
        const categorias = await serviceCategoria.get(req, res)
        res.json(categorias)
    }
    catch(error) {
        next(error) 
    }
}

async function postCategoria(req, res, next){
    try {
        const categoria = req.body
        const resultado = await serviceCategoria.post(categoria)
        res.status(201).json(resultado)       
    } catch (error) {
        next(error)        
    }
}

module.exports = {
    getCategoria,
    postCategoria,
}