const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const sequelize = require("./conection/conection")
const server = express();
const indexRouter = require('./routes/indexRouter');
// const { Op } = require("sequelize")
// const Products = require("./models/product")

const { PORT = 8081, HOST = "localhost" } = process.env;

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use('/', indexRouter);

// server.get('/', (req, res) => {
//     res.send('Bienvenido a mi API');
// });



// Control de rutas inexistentes
server.use('*', (req, res) => {
    res.status(404).send({ error: `La URL indicada no existe en este servidor` });
});

// Método oyente de solicitudes
sequelize.authenticate().then(() => {
    server.listen(PORT, HOST, () => {
        console.log(`El servidor está escuchando en: http://${HOST}:${PORT}`);
    });
}).catch((err) => {
    console.log("Hubo un problema con la conexión a la base de datos.")
    console.log(err)
});

