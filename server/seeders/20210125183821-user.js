'use strict';
const faker = require('faker')
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const users = []

    // for (let i = 0; i < 10; i++) {

    //   users.push({
    //     email: faker.internet.email(),
    //     password: bcrypt.hashSync('1234', 7),
    //     firstName: faker.name.firstName(),
    //     lastName: faker.name.lastName(),
    //     role: 'USER',
    //     post: null,
    //     phone: faker.phone.phoneFormats()
    //   })
    // }

    users.push({
      email: "root",
      password: bcrypt.hashSync('1234', 7),
      firstName: "ROOT",
      lastName: "ROOT",
      role: 'ADMIN',
      post: null,
      phone: "1 111 111 11 11"
    })

    await queryInterface.bulkInsert("users", users)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     *
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
