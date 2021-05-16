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
          price: 200.70,
          image: "producto00.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Stick insect",
          description:
            "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer",
          price: 241.99,
          image: "producto01.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cliffchat, mocking",
          description:
            "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
          price: 307.22,
          image: "producto02.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Brazilian otter",
          description:
            "posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus",
          price: 512.26,
          image: "producto03.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Four-striped grass mouse",
          description:
            "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse",
          price: 639.98,
          image: "producto04.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Royal tern",
          description:
            "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in",
          price: 311.64,
          image: "producto05.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Skunk, western spotted",
          description:
            "in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem",
          price: 86.90,
          image: "producto06.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Marine iguana",
          description:
            "libero rutrum ac lobortis vel dapibus at diam nam tristique tortor",
          price: 156.77,
          image: "producto07.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "White-eye, pale",
          description:
            "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
          price: 105.14,
          image: "producto08.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Trotter, lily",
          description:
            "vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
          price: 158.92,
          image: "producto09.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Snake (unidentified)",
          description:
            "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut",
          price: 258.47,
          image: "producto10.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kangaroo, black-faced",
          description:
            "quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu",
          price: 106.06,
          image: "producto11.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Boa, malagasy ground",
          description:
            "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit",
          price: 267.14,
          image: "producto12.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Savannah deer",
          description:
            "turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci",
          price: 88.04,
          image: "producto00.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Stork, saddle-billed",
          description:
            "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
          price: 93.67,
          image: "producto01.jpg",
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
