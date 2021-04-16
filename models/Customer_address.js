"use strict";
const { Model } = require("sequelize");
const Customer = require("./Customer");
module.exports = (sequelize, DataTypes) => {
  class Customer_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer_address.hasMany(models.Customer,{
        foreignKey: 'customer_id',
        as: 'customer'
      });

      Customer_address.hasMany(models.Address, {
        foreignKey: 'address_id',
        as: 'address'
      })
    }
  }
  Customer_address.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      customer_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Customer",
          key: "id"
        },
      },
      address_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Address",
          key: "id"
        },
      },
    },
    {
      sequelize,
      modelName: "Customer_address",
    }
  );
  return Customer_address;
};
