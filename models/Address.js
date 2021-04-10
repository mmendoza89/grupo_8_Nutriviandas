'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Address.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    street: {
      allowNull: false,
      type: Sequelize.STRING
    },
    number: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    unit: {
      allowNull: false,
      type: Sequelize.STRING
    },
    post_code: {
      allowNull: false,
      type: Sequelize.STRING
    },
    city_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: City,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      }
    }
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};