const express = require('express');
const router = express.Router();

const {
    getAllCatalogos,
    getCatalogoById,
    getCatalogoByTitulo,
    getCatalogoByGenero,
    getCatalogoByCategoria
} = require('../controllers/catalogoController');

router.get('/', getAllCatalogos);
router.get('/:id', getCatalogoById);
router.get('/nombre/:nombre', getCatalogoByTitulo);
router.get('/genero/:genero', getCatalogoByGenero);
router.get('/categoria/:categoria', getCatalogoByCategoria);

module.exports = router;