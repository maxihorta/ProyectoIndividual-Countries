const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM('1','2','3','4','5'),
      allowNull: false,
    },
    duration: {
      type: DataTypes.TIME,
     
    },
    season: {
      type: DataTypes.ENUM('Winter','Spring','Autumn','Summer'),
      allowNull: false,
    },
    
  },
  { timestamps:false, freezeTableName: true});
};

