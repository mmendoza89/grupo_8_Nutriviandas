"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Addresses",
      [
        {
          "street": "Doscher Street",
          "number": 272,
          "unit": "",
          "post_code": 3246,
          "city_id": 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "street": "Aster Court",
          "number": 143,
          "unit": "",
          "post_code": 155,
          "city_id": 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "street": "Campus Place",
          "number": 832,
          "unit": "",
          "post_code": 9863,
          "city_id": 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "street": "Dictum Court",
          "number": 752,
          "unit": "",
          "post_code": 9500,
          "city_id": 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "street": "Ingraham Street",
          "number": 821,
          "unit": "",
          "post_code": 1281,
          "city_id": 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Addresses", null, {});
  },
};
