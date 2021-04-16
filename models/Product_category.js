'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product_category.hasMany(models.Product,{
        foreignKey: 'id',
        as: 'product'
      });
      Product_category.hasMany(models.Category, {
        foreignKey: 'category_id',
        as: 'category'
      })
    }
  };
  Product_category.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product",
        key: "id"
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Category",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Product_category',
  });
  return Product_category;
};