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
            res.status(500).json({ message: "Ошибка сервера", error })
        }
    }
}

module.exports = {
    UserController
}

