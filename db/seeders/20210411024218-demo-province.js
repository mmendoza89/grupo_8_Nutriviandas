"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Provinces",
      [
        {
          name: "CABA",
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          name: "Buenos Aires",
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          name: "Mendoza",
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          name: "Córdoba",
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          name: "Santa Fé",
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Provinces", null, {});
  },
};
