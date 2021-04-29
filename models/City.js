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
      City.hasOne(models.Province, {
        foreignKey: "province_id",
        as: "province"
      });
      City.belongsTo(models.Customer_address, {
        foreignKey: "city_id",
        as:"city"
      });
    }
  };
  City.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    province_id: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: "Province",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};