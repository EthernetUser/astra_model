const { RoleApi } = require('../models')

class RoleApiController {
    static async get(req, res, next) {
        try {
            const result = RoleApi.getRoleApi()
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async update(req, res, next) {
        try {
            const { id, data } = req.body
            const result = RoleApi.updateRoleApi(id, data)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }
}


module.exports = {
    RoleApiController
}