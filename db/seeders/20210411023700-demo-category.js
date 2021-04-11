"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Veggies",
          description: "Comida vegetariana",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          name: "Vegana",
          description: "Comida vegana",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          name: "Carnes",
          description: "Comida con carne",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          name: "Pollo",
          description: "Comida con pollo",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Categories', null, {});
     */
  },
};
