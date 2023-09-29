const express = require('express');
const router = express.Router();

const { 
    getAllActores,
    
} = require('../controllers/actorController');

router.get('/get-all-actores', getAllActores);

module.exports = router;