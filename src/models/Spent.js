const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const SpentModel = (sequelize) => {
  // defino el modelo
  sequelize.define('spents', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2)
    },
    spentType: {
      type: DataTypes.ENUM('monthly', 'fixed', 'necessary', 'unnecessary'),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    // timestamps: false,
    tableName: 'spents'
  });
};

module.exports = SpentModel;