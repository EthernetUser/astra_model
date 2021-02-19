import role from 'server/models/role'

const { body } = require('express-validator')

const roleApi = {
    roleApiUpdateValidation: [
        body('roleApi').exists().withMessage('Нет поля roleApi').notEmpty()
            .isString()
    ]
}

export default roleApi