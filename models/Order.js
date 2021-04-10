"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Customer,
          key: "id",
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        }
      },
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      shipment_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      payment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Payment_method,
          key: "id",
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        }
      }
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
