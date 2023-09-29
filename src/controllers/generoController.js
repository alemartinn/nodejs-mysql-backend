const Genero = require('../models/genero');

// Controlador para obtener todos los generos.
exports.getAllGeneros = async (req, res) => {
    try {
        const generosFound = await Genero.findAll();
        
        res.status(200).json({
            message: "Generos encontrados",
            response: generosFound,
            success: true,
        });

    } catch (error) {
        res.status(400).json({
            message: "Error al buscar generos",
            response: error,
            success: false,
        });
    }
}