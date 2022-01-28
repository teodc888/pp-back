const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('portfolios', {
    id: {
        //add uui
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true,
      },
    titulo: {
      type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING,
    },
    link: {
        type: DataTypes.STRING,
    },
    github:{
        type: DataTypes.STRING,
    }

  },
  {
    createdAt: false,
    updatedAt: false,
  });
};
