const { DataTypes } = require('sequelize');
const sequelize = require('../conection/conection');

const ActoresContenido = sequelize.define('ActoresContenido', {
    idActor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'actores',
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
    tableName: 'actoresContenido'
});

module.exports = ActoresContenido;