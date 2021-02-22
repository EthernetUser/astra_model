'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Task"
      },
      essence: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "The essence of task"
      },
      startTime: {
        type: Sequelize.DATE,
        allowNull: true
      },
      predictedStartTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      finishTime: {
        type: Sequelize.DATE,
        allowNull: true
      },
      predictedFinishTime: {
        type: Sequelize.DATE,
        allowNull: true
      },
      executer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      report: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: "Not done yet"
      },
      denied: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};