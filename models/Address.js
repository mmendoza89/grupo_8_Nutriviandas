"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.hasOne(models.City, {
        foreignKey: "city_id",
        as: "city"
      });
      Address.belongsTo(models.Customer_address, {
        foreignKey: "address_id",
        as:"address"
      });
    }
  }
  Address.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      street: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      number: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      unit: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      post_code: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "City",
          key: "id"
        },
      },
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
