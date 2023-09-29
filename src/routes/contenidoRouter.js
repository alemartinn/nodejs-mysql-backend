const express = require('express');
const router = express.Router();

const {
    getAllContenidos
} = require('../controllers/contenidoController');

router.get('/get-all-contenidos', getAllContenidos);

module.exports = router;