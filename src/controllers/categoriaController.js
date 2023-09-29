const Categoria = require('../models/categoria');

// Controlador para obtener todas las categorias.
exports.getAllCategorias = async (req, res) => {
    try {
        const categoriasFound = await Categoria.findAll();
        
        res.status(200).json({
            message: "Categorias encontradas",
            response: categoriasFound,
            success: true,
        });

    } catch (error) {
        res.status(400).json({
            message: "Error al buscar categorias",
            response: error,
            success: false,
        });
    }
}