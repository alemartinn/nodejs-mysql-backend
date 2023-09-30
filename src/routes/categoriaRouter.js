const express = require('express');
const router = express.Router();

const {
    getAllCategorias
} = require('../controllers/categoriaController');

router.get('/', getAllCategorias);

module.exports = router;