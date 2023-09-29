const path = require('path');
const { DataTypes } = require('sequelize');
const sequelize = require('../conection/conection');
const Categoria = require('./categoria');
const Genero = require('./genero');
const Actor = require('./actor');
// const [ActoresContenido, GenerosContenido] = require('./union-models');
const ActoresContenido = require('./actoresContenido');
const GenerosContenido = require('./generosContenido');

const { FILE_URL='http://localhost:8081' } = process.env;

const Contenido = sequelize.define('Contenido', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: false,
        get () {
            const poster = this.getDataValue('poster'); // Obtiene el valor del campo 'poster'
            return path.join(FILE_URL, poster); // Devuelve la ruta completa al archivo
        }
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resumen: {
        type: DataTypes.STRING,
        allowNull: true
    },
    temporadas: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categoria',
            key: 'id' 
        }
    }
}, {
    timestamps: false,
    tableName: 'contenido'
});

Categoria.hasMany(Contenido, { foreignKey: 'idCategoria' });
Contenido.belongsTo(Categoria, { foreignKey: 'idCategoria', as: 'categoria' });

Genero.belongsToMany(Contenido, { through: GenerosContenido, foreignKey: 'idGenero' });
Contenido.belongsToMany(Genero, { through: GenerosContenido, foreignKey: 'idContenido', as: 'generos' });

Actor.belongsToMany(Contenido, { through: ActoresContenido, foreignKey: 'idActor' });
Contenido.belongsToMany(Actor, { through: ActoresContenido, foreignKey: 'idContenido', as: 'reparto' });

module.exports = Contenido;
