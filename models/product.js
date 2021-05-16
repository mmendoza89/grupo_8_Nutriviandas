'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.Order_detail, {
        through: 'Order_details',
        foreignKey: 'product_id1',
        as: 'product_order_detail'
      });
      Product.belongsToMany(models.Product_category, {
        through: 'Product_categories',
        foreignKey: 'product_id2',
        as: 'product_category'
      })
      Product.belongsToMany(models.Menu,{
        through: 'Menu_products',
        foreignKey: 'product_id',
        as: 'product_menu'
      });
    }
  };
  
  Product.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Products'
  });
  return Product;
};
