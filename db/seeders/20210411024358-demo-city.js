"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          name: "Palermo",
          province_id: 1,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          name: "Colegiales",
          province_id: 1,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          name: "Nuñez",
          province_id: 1,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          name: "Vicente López",
          province_id: 2,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cities", null, {});
  },
};
