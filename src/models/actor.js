const { DataTypes } = require('sequelize');
const sequelize = require('../conection/conection');

const Actor = sequelize.define('Actor', {
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
    tableName: 'actores'
});

module.exports = Actor;
