const sequelize = require("../conection/conection");
const Actor = require("../models/actor");
const Contenido = require("../models/contenido");
const Genero = require("../models/genero");
const Categoria = require("../models/categoria");
const { Op } = require("sequelize");

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

// Controlador para obtener los catalogos y filtrar por id de pelicula o serie.
exports.getCatalogoById = async (req, res) => {
    try {
        const id = req.params.id;

        if (isNaN(id)) {
            return (
                res.status(400).json({
                    message: `Error al buscar catalogo. ${id} no es un id valido`,
                    response: "El id debe ser un numero",
                    success: false,
                })
            )
        }

        const catalogo = await sequelize.query(
            "SELECT * FROM catalogo WHERE id = :id",
            { replacements: { id: id }, type: sequelize.QueryTypes.SELECT }
        );

        if (catalogo.length === 0) {
            return (
                res.status(400).json({
                    message: `No existe un catalogo con el id ${id}`,
                    response: null,
                    success: true,
                })
            )
        }

        res.status(200).json({
            message: "Catalogo encontrado",
            response: catalogo,
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Error al buscar catalogo",
            response: error,
            success: false,
        });
    }
}

// Controlador para obtener los catalogos y filtrar por titulo o parte del titulo del catalogo.
exports.getCatalogoByTitulo = async (req, res) => {
    try {
        const titulo = req.params.nombre;
        const catalogo = await sequelize.query(
            "SELECT * FROM catalogo WHERE titulo LIKE :titulo",
            { replacements: { titulo: `%${titulo}%` }, type: sequelize.QueryTypes.SELECT }
        );
        res.status(200).json({
            message: "Catalogo encontrado",
            response: catalogo,
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Error al buscar catalogo",
            response: error,
            success: false,
        });
    }
}

// Controlador para obtener los catalogos y filtrar por genero.
exports.getCatalogoByGenero = async (req, res) => {
    try {
        const genero = req.params.genero;
        const catalogo = await sequelize.query(
            "SELECT * FROM catalogo WHERE genero LIKE :genero",
            { replacements: { genero: `%${genero}%` }, type: sequelize.QueryTypes.SELECT }
        );
        res.status(200).json({
            message: "Catalogo encontrado",
            response: catalogo,
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Error al buscar catalogo",
            response: error,
            success: false,
        });
    }
}

// Controlador para obtener los catalogos y filtrar por categoria. La categoria solo puede ser 'Serie' o 'Pelicula'. No importa si es mayuscula o minuscula pero debe ser la palabra completa.
exports.getCatalogoByCategoria = async (req, res) => {
    try {
        const categoria = req.params.categoria;

        if (categoria.toLowerCase() !== 'serie' && categoria.toLowerCase() !== 'pelicula') {
            return (
                res.status(400).json({
                    message: `Error al buscar catalogo. ${categoria} no es una categoria valida`,
                    response: "La categoria debe ser 'Serie' o 'Pelicula'",
                    success: false,
                })
            )
        }

        const catalogo = await sequelize.query(
            "SELECT * FROM catalogo WHERE categoria = :categoria",
            { replacements: { categoria: `${categoria}` }, type: sequelize.QueryTypes.SELECT }
        );
        res.status(200).json({
            message: "Catalogo encontrado",
            response: catalogo,
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Error al buscar catalogo",
            response: error,
            success: false,
        });
    }
}