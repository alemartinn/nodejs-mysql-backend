const Actor = require('../models/actor');

// Controlador para obtener todos los actores.
exports.getAllActores = async (req, res) => {
    try {
        const actoresFound = await Actor.findAll();
        
        res.status(200).json({
            message: "Actores encontrados",
            response: actoresFound,
            success: true,
        });

    } catch (error) {
        res.status(400).json({
            message: "Error al buscar actores",
            response: error,
            success: false,
        });
    }
}