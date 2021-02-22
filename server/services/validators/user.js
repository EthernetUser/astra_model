const { param } = require('express-validator')

const user = {
    userGetValidation: [
        param('id').exists().withMessage('Не указан id').isString()
            .notEmpty()
    ]
}

module.exports = user 