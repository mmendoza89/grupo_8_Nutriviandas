"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "User_roles",
      [
        {
          "name": "guest",
          "description": "Has no special privileges",
          "valid": true,
          "editable": false,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "owner",
          "description":
            "Owns the web. Can do everything. Can create 'admin' users",
          "valid": true,
          "editable": false,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "admin",
          "description": "Can do everything except create 'admin' users",
          "valid": true,
          "editable": false,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "franchise",
          "description": "Has no special privileges",
          "valid": true,
          "editable": true,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User_roles', null, {});
  },
};
