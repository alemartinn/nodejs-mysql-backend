const { DataTypes } = require('sequelize');
const sequelize = require('../conection/conection');

const GenerosContenido = sequelize.define('GenerosContenido', {
    idGenero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'generos',
            key: 'id'
        }
    },
    idContenido: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'contenido',
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'generosContenido'
});

module.exports = GenerosContenido;