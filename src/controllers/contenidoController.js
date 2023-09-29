const Contenido = require('../models/contenido');

// Controlador para obtener todos los contenidos.
exports.getAllContenidos = async (req, res) => {
    try {
        const contenidosFound = await Contenido.findAll();
        
        res.status(200).json({
            message: "Contenidos encontrados",
            response: contenidosFound,
            success: true,
        });

    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Error al buscar contenidos",
            response: error,
            success: false,
        });
    }
}