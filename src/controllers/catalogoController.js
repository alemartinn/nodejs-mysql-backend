const sequelize = require("../conection/conection");

// Controlador para obtener todos los catalogos.
exports.getAllCatalogos = async (req, res) => {
    try {
        const catalogo = await sequelize.query(
            "SELECT * FROM catalogo",
            { type: sequelize.QueryTypes.SELECT }
        );
        res.status(200).json({
            message: "Catalogos encontrados",
            response: catalogo,
            success: true,
        }); 
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Error al buscar catalogos",
            response: error,
            success: false,
        });
    }
}