const { Role } = require('../models')

class RoleController {
    static async get(req, res, next) {
        try {
            const result = await Role.getRole()
            res.status(result.status).json(result)
        } catch (error) {

        }
    }

    static async create(req, res, next) {
        try {
            const { name } = req.body
            const result = await Role.createRole(name)
            res.status(result.status).json(result)
        } catch (error) {

        }
    }

    static async update(req, res, next) {
        try {
            const { roles } = req.body
            const result = await Role.updateRole(roles)
            res.status(result.status).json(result)
        } catch (error) {

        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.body
            const result = await Role.deleteRole(id)
            res.status(result.status).json(result)
        } catch (error) {

        }
    }
}

module.exports = {
    RoleController
}