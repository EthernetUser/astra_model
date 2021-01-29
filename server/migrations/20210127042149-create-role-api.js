'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('RoleApis', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            roles: {
                allowNull: false,
                type: Sequelize.STRING,
                defaultValue: "[null]"
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('RoleApis');
    }
};