const { body } = require('express-validator')

const role = {
    roleCreateValidation: [
        body('name').exists().withMessage('Нет поля name').notEmpty()
            .isString().trim().toUpperCase()
    ],
    roleUpdateValidation: [
        body('roles').exists().withMessage('Нет поля roles').custom(value => {
            try {
                const roles = JSON.parse(value)
                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name.trim() === "") {
                        return Promise.reject('Имена API не должны быть пустыми')
                    }
                }
                return true
            } catch (error) {
                return Promise.reject('Поле roles должно быть стрингифицированным json')
            }
        })
    ],
    roleDeleteValidation: [
        body('id').exists().withMessage('Нет поля id').notEmpty()
            .isString()
    ]
}

module.exports = role