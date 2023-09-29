var express = require('express');
var router = express.Router();
const actorRouter = require('./actorRouter');
const catalogoRouter = require('./catalogoRouter');
const categoriaRouter = require('./categoriaRouter');
const contenidoRouter = require('./contenidoRouter');
const generoRouter = require('./generoRouter');

router.get('/', function (req, res, next) {
        res.send('Bienvenido a mi API');
});
// router.use('/')
router.use('/actor', actorRouter);
router.use('/catalogo', catalogoRouter);
router.use('/categoria', categoriaRouter);
router.use('/contenido', contenidoRouter);
router.use('/genero', generoRouter);

module.exports = router