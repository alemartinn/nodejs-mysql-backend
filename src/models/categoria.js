const { DataTypes } = require('sequelize');
const sequelize = require('../conection/conection');

const Categoria = sequelize.define('Categoria', {
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
    tableName: 'categorias'
});

module.exports = Categoria;
