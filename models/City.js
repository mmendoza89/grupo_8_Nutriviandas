'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  City.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    province_id: {
      allowNull: false,
      type: Sequelize.STRING,
      references: {
        model: Province,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      }
    }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};