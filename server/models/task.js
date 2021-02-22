'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {

    static async getTask(id) {

      const task = await Task.findByPk(id)

      if (!task) {
        return {
          message: "Задание не найдено",
          status: 400
        }
      }

      return {
        task,
        status: 200
      }
    }

    static async getAllTasks() {

      const tasks = await Task.findAll()

      if (!tasks) {
        return {
          message: "Заданий нет",
          status: 400
        }
      }

      return {
        tasks,
        status: 200
      }
    }

    static async getTaskByExecuter(id, executer_id) {

      const task = await Task.findByPk(id)

      if (!task) {
        return {
          message: "Задание не найдено",
          status: 400
        }
      }

      if (task.executer_id !== executer_id) {
        return {
          message: "Отказанно в доступе",
          status: 403
        }
      }

      return {
        task,
        status: 200
      }
    }

    static async getAllTasksByExecuter(executer_id) {

      const tasks = await Task.findAll({
        where: { executer_id }
      })

      if (!tasks) {
        return {
          message: "Заданий не найдено",
          status: 400
        }
      }

      return {
        tasks,
        status: 200
      }
    }

    static async createTask(data) {

      const task = await Task.create(data)

      if (!task) {
        return {
          message: "Задание не было создано",
          status: 500
        }
      }

      return {
        message: "Задание было создано",
        status: 200
      }
    }

    static async startTask(id, startTime, executer_id) {
      const task = await Task.findByPk(id)

      if (!task) {
        return {
          message: "Задание не найдено",
          status: 400
        }
      }

      if(task.done) {
        return {
          message: "Задание уже завершено",
          status: 400
        }
      }

      if (task.executer_id !== executer_id) {
        return {
          message: "Нет доступа",
          status: 403
        }
      }

      task.startTime = startTime

      await task.save()

      return {
        message: "Задание было начато",
        status: 200
      }
    }

    static async finishTask(id, finishTime, executer_id) {
      const task = await Task.findByPk(id)

      if (!task) {
        return {
          message: "Задание не найдено",
          status: 400
        }
      }

      if (task.done) {
        return {
          message: "Задание уже закончено",
          status: 400
        }
      }

      if (task.executer_id !== executer_id) {
        return {
          message: "Нет доступа",
          status: 403
        }
      }

      task.finishTime = finishTime
      await task.save()

      return {
        message: "Задание отправленно на подтверждение",
        status: 200
      }
    }

    static async deleteTask(id) {
      const isDeleted = await Task.destroy({
        where: { id }
      })

      if(isDeleted === 0) {
        return {
          message: "Задание не было удалено",
          status: 400
        }
      }

      return {
        message: "Задание было удалено",
        status: 200
      }
    }

    static async denyTask(id) {
      const task = await Task.findByPk(id)

      if(!task) {
        return {
          message: "Задание не найдено",
          status: 400
        }
      }

      if(task.done) {
        return {
          message: "Задание уже сделано",
          status: 400
        }
      }

      if(task.denied) {
        return {
          message: "Задание уже отменено",
          status: 400
        }
      }

      task.denied = true

      await task.save()

      return {
        message: "Задание было отменено",
        status: 200
      }
    }

    static async doneTask(id) {
      const task = await Task.findByPk(id)

      if(!task) {
        return {
          message: "Задание не найденно",
          status: 200
        }
      }

      if(task.done) {
        return {
          message: "Задание уже завершено",
          status: 400
        }
      }

      if(task.denied) {
        return {
          message: "Задание уже отменено",
          status: 400
        }
      }

      task.denied = true

      await task.save()

      return {
        message: "Задание отменено",
        status: 200
      }
    }

    static associate(models) {
    }
  };
  Task.init({
    name: DataTypes.STRING,
    essence: DataTypes.TEXT,
    startTime: DataTypes.DATE,
    predictedStartTime: DataTypes.DATE,
    finishTime: DataTypes.DATE,
    predictedFinishTime: DataTypes.DATE,
    executer_id: DataTypes.INTEGER,
    report: DataTypes.TEXT,
    denied: DataTypes.BOOLEAN,
    done: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Task',
    timestamps: false
  });
  return Task;
};