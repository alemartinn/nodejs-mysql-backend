const express = require('express');
const router = express.Router();

const {
    getAllGeneros
} = require('../controllers/generoController');

router.get('/get-all-generos', getAllGeneros);

module.exports = router;