"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order_detail.hasMany(models.Order, {
        foreignKey: 'order_id',
        as: 'order'
      });
      Order_detail.hasMany(models.Product, {
        foreignKey: 'id',
        as: 'product'
      });
    }
  }
  Order_detail.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Order",
          key: "id"
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "product",
          key: "id"
        },
      },
    },
    {
      sequelize,
      modelName: "Order_detail",
    }
  );
  return Order_detail;
};
