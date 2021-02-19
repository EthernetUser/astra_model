'use strict';
const { auth, role, post, roleapi, task } = require('../config/roleapi.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("roleapis", [
      //AUTH
      { name: auth.register, roles: "[\"ADMIN\"]" },
      //ROLE
      { name: role.get, roles: "[\"ADMIN\"]" },
      { name: role.create, roles: "[\"ADMIN\"]" },
      { name: role.update, roles: "[\"ADMIN\"]" },
      { name: role.delete, roles: "[\"ADMIN\"]" },
      //POST
      { name: post.get, roles: "[\"ADMIN\"]" },
      { name: post.create, roles: "[\"ADMIN\"]" },
      { name: post.update, roles: "[\"ADMIN\"]" },
      { name: post.delete, roles: "[\"ADMIN\"]" },
      //ROLEAPI
      { name: roleapi.get, roles: "[\"ADMIN\"]" },
      { name: roleapi.update, roles: "[\"ADMIN\"]" },
      //TASK
      { name: task.get, roles: "[\"ADMIN\"]" },
      { name: task.getAll, roles: "[\"ADMIN\"]" },
      { name: task.getExecuter, roles: "[\"ADMIN\"]" },
      { name: task.getAllExecuter, roles: "[\"ADMIN\"]" },
      { name: task.create, roles: "[\"ADMIN\"]" },
      { name: task.delete, roles: "[\"ADMIN\"]" },
      { name: task.deny, roles: "[\"ADMIN\"]" },
      { name: task.done, roles: "[\"ADMIN\"]" },
      { name: task.start, roles: "[\"ADMIN\"]" },
      { name: task.finish, roles: "[\"ADMIN\"]" },
    ])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('roleapis', null, {})
  }
};
