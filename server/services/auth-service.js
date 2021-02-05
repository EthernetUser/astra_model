const jwt = require('jsonwebtoken')
const config = require('../config/config.json')
const { RoleApi, User } = require('../models')

function verifyTokenAndRole(apiName) {
    return async function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
            if (!req.headers.authorization) {
                return res.status(400).json({ message: 'Токен не был передан' })
            }

            const token = req.headers.authorization.replace(/Bearer /, '')

            const decoded = jwt.verify(token, config.jwtSecret)

            const isExistInTable = await User.findByPk(decoded.id)
            if (!isExistInTable) {
                return res.status(401).json({ message: 'Не существующий пользователь' })
            }

            const api = await RoleApi.findOne({
                where: {
                    name: apiName
                },
                attributes: [
                    'roles'
                ]
            })

            if (!api) {
                return res.status(500).json({ message: 'Ошибка сервера' })
            }

            const roles = JSON.parse(api.roles)

            if (!roles.includes(decoded.role)) {
                return res.status(401).json({ message: 'Недостаточно прав' })
            }

            req.user = decoded
            next()
        } catch (error) {
            return res.status(500).json({ message: 'Ошибка сервера' })
        }
    }
}

module.exports = {
    verifyTokenAndRole
}