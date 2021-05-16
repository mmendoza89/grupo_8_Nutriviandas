'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Menu.belongsToMany(models.Product, {
        through: 'Menu_product',
        as: 'Products',
        foreignKey: 'menu_id',
      otherKey: 'product_id',
      })
    }
  };
  Menu.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Menu'
  });
  return Menu;
};