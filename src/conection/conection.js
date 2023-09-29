const Sequelize = require('sequelize');

const { DB_NAME = 'trailerflix', DB_USER = 'root', DB_PASS = 'ale1234', HOST = 'localhost' } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: HOST,
    dialect: 'mysql'
});

module.exports = sequelize;