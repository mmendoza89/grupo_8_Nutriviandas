"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Menu_products",
      [
        {
          "id": 1,
          "menu_id":"1",
          "product_id": "15",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"1",
          "product_id": "16",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"1",
          "product_id": "17",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"1",
          "product_id": "18",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"1",
          "product_id": "19",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"2",
          "product_id": "25",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"2",
          "product_id": "26",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"2",
          "product_id": "27",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"2",
          "product_id": "28",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"2",
          "product_id": "29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"3",
          "product_id": "35",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"3",
          "product_id": "36",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"3",
          "product_id": "37",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"3",
          "product_id": "38",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"3",
          "product_id": "39",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"4",
          "product_id": "45",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"4",
          "product_id": "46",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"4",
          "product_id": "47",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"4",
          "product_id": "48",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"4",
          "product_id": "49",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"5",
          "product_id": "55",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"5",
          "product_id": "56",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"5",
          "product_id": "57",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"5",
          "product_id": "58",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"5",
          "product_id": "59",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"6",
          "product_id": "65",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"6",
          "product_id": "66",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"6",
          "product_id": "67",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"6",
          "product_id": "68",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "menu_id":"6",
          "product_id": "69",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Menu_products", null, {});
  },
};
