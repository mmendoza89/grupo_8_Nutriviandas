"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Menus",
      [
        {
          "id": 1,
          "name": "Carnes",
          "description":
            "amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          "id": 2,
          "name": "Vegetariano",
          "description":
            "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          "id": 3,
          "name": "Pizzas",
          "description":
            "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          "id": 4,
          "name": "Tartas",
          "description":
            "posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          "id": 5,
          "name": "Hamburguesas",
          "description":
            "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          "id": 6,
          "name": "Personalizado",
          "description":
            "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in",
            createdAt: new Date(),
            updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Menus", null, {});
  },
};
