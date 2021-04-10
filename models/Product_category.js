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
      // define association here
    }
  };
  Product_category.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: product,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      }
    }
  }, {
    sequelize,
    modelName: 'Product_category',
  });
  return Product_category;
};