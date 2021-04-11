"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Hyrax",
          description:
            "amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla",
          category_id: 1,
          price: 200.70,
          image: "http://www.placekitten.com/21",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Stick insect",
          description:
            "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer",
          category_id: 1,
          price: 241.99,
          image: "http://www.placekitten.com/22",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cliffchat, mocking",
          description:
            "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
          category_id: 1,
          price: 307.22,
          image: "http://www.placekitten.com/23",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Brazilian otter",
          description:
            "posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus",
          category_id: 2,
          price: 512.26,
          image: "http://www.placekitten.com/24",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Four-striped grass mouse",
          description:
            "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse",
          category_id: 2,
          price: 639.98,
          image: "http://www.placekitten.com/25",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Royal tern",
          description:
            "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in",
          category_id: 3,
          price: 311.64,
          image: "http://www.placekitten.com/26",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Skunk, western spotted",
          description:
            "in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem",
          category_id: 2,
          price: 86.90,
          image: "http://www.placekitten.com/27",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Marine iguana",
          description:
            "libero rutrum ac lobortis vel dapibus at diam nam tristique tortor",
          category_id: 1,
          price: 156.77,
          image: "http://www.placekitten.com/28",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "White-eye, pale",
          description:
            "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
          category_id: 2,
          price: 105.14,
          image: "http://www.placekitten.com/29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Trotter, lily",
          description:
            "vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
          category_id: 3,
          price: 158.92,
          image: "http://www.placekitten.com/210",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Snake (unidentified)",
          description:
            "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut",
          category_id: 3,
          price: 258.47,
          image: "http://www.placekitten.com/211",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kangaroo, black-faced",
          description:
            "quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu",
          category_id: 1,
          price: 106.06,
          image: "http://www.placekitten.com/212",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Boa, malagasy ground",
          description:
            "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit",
          category_id: 3,
          price: 267.14,
          image: "http://www.placekitten.com/213",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Savannah deer",
          description:
            "turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci",
          category_id: 3,
          price: 88.04,
          image: "http://www.placekitten.com/214",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Stork, saddle-billed",
          description:
            "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
          category_id: 2,
          price: 93.67,
          image: "http://www.placekitten.com/215",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
