const { Task } = require('@models')

class TaskController {

    static async get(req, res, next) {
        try {
            const { id } = req.params
            const result = await Task.getTask(id)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async getAll(req, res, next) {
        try {
            const result = await Task.getAllTasks()
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async getByExecuter(req, res, next) {
        try {
            const { id } = req.params
            const executer_id = req.user.id
            const result = await Task.getTaskByExecuter(id, executer_id)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async getAllByExecuter(req, res, next) {
        try {
            const executer_id = req.use.id
            const result = await Task.getAllTasksByExecuter(executer_id)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async create(req, res, next) {
        try {
            const data = {
                name: req.body.name,
                essence: req.body.essence,
                preStartTime: req.body.predictedStartTime,
                preFinishTime: req.body.preditedFinishTime,
                executerId: req.body.executerId
            }
            const result = await Task.createTask(data)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async start(req, res, next) {
        try {
            const { id } = req.body
            const executer_id = req.user.id
            const startTime = new Date()
            const result = await Task.startTask(id, startTime, executer_id)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async finish(req, res, next) {
        try {
            const { id } = req.body
            const executer_id = req.user.id
            const startTime = new Date()
            const result = await Task.finishTask(id, startTime, executer_id)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async deny(req, res, next) {
        try {
            const { id } = req.body
            const result = await Task.denyTask(id)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.body
            const result = await Task.deleteTask(id)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async done(req, res, next) {
        try {
            const { id } = req.body
            const result = await Task.doneTask(id)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

}

module.exports = {
    TaskController
}