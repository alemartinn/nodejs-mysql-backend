const express = require('express');
const router = express.Router();

const {
    getAllCategorias
} = require('../controllers/categoriaController');

router.get('/get-all-categorias', getAllCategorias);

module.exports = router;