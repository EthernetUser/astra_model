'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            firstName: {
                allowNull: false,
                type: Sequelize.STRING
            },
            lastName: {
                allowNull: false,
                type: Sequelize.STRING
            },
            role: {
                allowNull: true,
                type: Sequelize.STRING,
                references: {
                    model: 'roles',
                    key: 'name'
                }
            },
            post: {
                allowNull: true,
                type: Sequelize.STRING,
                references: {
                    model: 'posts',
                    key: 'name'
                }
            },
            phone: {
                allowNull: false,
                type: Sequelize.STRING
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};