const { Role } = require('../models')

class RoleController {
    static async get(req, res, next) {
        try {
            const result = await Role.getRole()
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async create(req, res, next) {
        try {
            const { name } = req.body
            const result = await Role.createRole(name)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async update(req, res, next) {
        try {
            const { roles } = req.body
            const parsedRoles = JSON.parse(roles)
            const result = await Role.updateRole(parsedRoles)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.body
            const result = await Role.deleteRole(id)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }
}

module.exports = {
    RoleController
}