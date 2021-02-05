const { validationResult } = require('express-validator')

module.exports = function validateDecorator(action) {
    return function (req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.errors })
        }
        action(req, res, next)
    }
}