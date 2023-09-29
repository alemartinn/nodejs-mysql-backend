const { DataTypes } = require('sequelize');
const sequelize = require('../conection/conection');

const Genero = sequelize.define('Genero', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'generos'
});

module.exports = Genero;
