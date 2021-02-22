const { User } = require('@models')

class UserController {

    /**
     * This middleware receives { email, password } 
     * through request and returns auth token.
     */
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            const result = await User.loginUser(email, password)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    /**
     * This middleware receives {
     *  email, password, firstName,
     *  lastName, role, post, phone
     * } through request and creates new entry in the database.
     */
    static async register(req, res, next) {
        try {
            const data = {
                email: req.body.email,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                role: req.body.role,
                post: req.body.post,
                phone: req.body.phone
            }
            const result = await User.registerUser(data)
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async get(req, res, next) {
        try {
            const { id } = req.params
            const user = await User.findByPk(id)

            if (!user) {
                return res.status(400).json({ message: "Данного пользователя не найдено" })
            }

            const result = {
                user,
                status: 200
            }

            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async getAll(req, res, next) {
        try {
            const users = await User.findAll()

            if (!users) {
                return res.status(400).json({ message: "Пользователей не найдено" })
            }

            const result = {
                users,
                status: 200
            }

            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json({ message: "Ошибка сервера" })
        }
    }
}

module.exports = {
    UserController
}

