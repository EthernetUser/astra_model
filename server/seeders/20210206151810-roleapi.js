'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("roleapis", [
      //AUTH
      { name: 'REGISTER', roles: "[\"ADMIN\"]" },
      //ROLE
      { name: 'GET_ROLES', roles: "[\"ADMIN\"]" },
      { name: 'CREATE_ROLE', roles: "[\"ADMIN\"]" },
      { name: 'UPDATE_ROLE', roles: "[\"ADMIN\"]" },
      { name: 'DELETE_ROLE', roles: "[\"ADMIN\"]" },
      //POST
      { name: 'GET_POSTS', roles: "[\"ADMIN\"]" },
      { name: 'CREATE_POST', roles: "[\"ADMIN\"]" },
      { name: 'UPDATE_POST', roles: "[\"ADMIN\"]" },
      { name: 'DELETE_POST', roles: "[\"ADMIN\"]" },
      //ROLEAPI
      { name: 'GET_ROLEAPI', roles: "[\"ADMIN\"]" },
      { name: 'UPDATE_ROLEAPI', roles: "[\"ADMIN\"]" },
    ])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('roleapis', null, {})
  }
};
