"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          "first_name": "Sondra",
          "last_name": "Lowe",
          "email": "email0@email.com",
          "phone_number": "+54 (982) 532-3489",
          "notes": "Mollit ipsum duis dolor quis culpa magna proident.",
          "password": 12345,
          "avatar": "http://www.placekitten.com/80/80",
          "user_role_id": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "first_name": "Vinson",
          "last_name": "Garrett",
          "email": "email1@email.com",
          "phone_number": "+54 (954) 452-3630",
          "notes": "Est culpa veniam sunt veniam Lorem quis.",
          "password": 12345,
          "avatar": "http://www.placekitten.com/81/81",
          "user_role_id": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "first_name": "Tricia",
          "last_name": "Galloway",
          "email": "email2@email.com",
          "phone_number": "+54 (955) 576-3571",
          "notes": "Quis do eu est ea cillum dolore consectetur proident adipisicing commodo consequat consequat ex sit.",
          "password": 12345,
          "avatar": "http://www.placekitten.com/82/82",
          "user_role_id": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "first_name": "Holt",
          "last_name": "Villarreal",
          "email": "email3@email.com",
          "phone_number": "+54 (901) 545-2153",
          "notes": "Aliquip fugiat reprehenderit nisi in sunt ea veniam qui veniam ex sint nostrud laboris dolor.",
          "password": 12345,
          "avatar": "http://www.placekitten.com/83/83",
          "user_role_id": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "first_name": "Iva",
          "last_name": "Potter",
          "email": "email4@email.com",
          "phone_number": "+54 (876) 577-2856",
          "notes": "Ea esse cillum ullamco culpa cillum aliquip non ex nostrud eu dolore.",
          "password": 12345,
          "avatar": "http://www.placekitten.com/84/84",
          "user_role_id": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "first_name": "Pat",
          "last_name": "Burke",
          "email": "email5@email.com",
          "phone_number": "+54 (893) 476-2008",
          "notes": "Irure non exercitation aliqua do consectetur nisi eiusmod proident sit fugiat irure tempor.",
          "password": 12345,
          "avatar": "http://www.placekitten.com/85/85",
          "user_role_id": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "first_name": "Sawyer",
          "last_name": "Terrell",
          "email": "email6@email.com",
          "phone_number": "+54 (943) 580-3101",
          "notes": "Eu aliquip adipisicing enim reprehenderit ullamco mollit laboris exercitation duis id.",
          "password": 12345,
          "avatar": "http://www.placekitten.com/86/86",
          "user_role_id": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "first_name": "Deborah",
          "last_name": "Brown",
          "email": "email7@email.com",
          "phone_number": "+54 (862) 425-3111",
          "notes": "Velit anim commodo laborum tempor mollit eu laboris.",
          "password": 12345,
          "avatar": "http://www.placekitten.com/87/87",
          "user_role_id": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "first_name": "Owner",
          "last_name": "Brown",
          "email": "owner@owner.com",
          "phone_number": "+54 (862) 425-3111",
          "notes": "Velit anim commodo laborum tempor mollit eu laboris.",
          "password": 12345,
          "avatar": "default-profile.jpg",
          "user_role_id": 2,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "first_name": "Admin",
          "last_name": "Brown",
          "email": "admin@admin.com",
          "phone_number": "+54 (862) 425-3111",
          "notes": "Velit anim commodo laborum tempor mollit eu laboris.",
          "password": 12345,
          "avatar": "default-profile.jpg",
          "user_role_id": 3,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "first_name": "Guest",
          "last_name": "Brown",
          "email": "guest@guest.com",
          "phone_number": "+54 (862) 425-3111",
          "notes": "Velit anim commodo laborum tempor mollit eu laboris.",
          "password": 12345,
          "avatar": "default-profile.jpg",
          "user_role_id": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
await queryInterface.bulkDelete('Customers', null, {});

  },
};
