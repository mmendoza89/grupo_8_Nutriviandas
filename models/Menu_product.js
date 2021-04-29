'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Menu_product.hasMany(models.Menu, {
          foreignKey: 'menu_id',
          as: 'menu'
        });
        Menu_product.hasMany(models.Product, {
          foreignKey: 'id',
          as: 'product'
        });
    }
  };
  Menu_product.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    menu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Menu",
        key: "id"
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Menu_product',
  });
  return Menu_product;
};