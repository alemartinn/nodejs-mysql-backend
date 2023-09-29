const express = require('express');
const router = express.Router();

const {
    getAllCatalogos
} = require('../controllers/catalogoController');

router.get('/get-all-catalogos', getAllCatalogos);

module.exports = router;