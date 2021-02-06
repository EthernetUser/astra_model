const { body } = require('express-validator')

const auth = {
    loginValidation: [
        body('email').exists().withMessage('Нет поля email').notEmpty()
            .isEmail().isString(),
        body('password').exists().withMessage('Нет поля email').notEmpty()
            .isString()

    ],
    registerValidation: [
        body('email').exists().withMessage('Нет поля email').notEmpty()
            .isEmail().isString(),
        body('password').exists().withMessage('Нет поля email').notEmpty()
            .isString().isLength({ min: 5 }).withMessage('Пароль должен быть от 5 и больше символов'),
        body('firstName').trim().isString(),
        body('lastName').trim().isString(),
        body('role').trim(),
        body('post').trim(),
        body('phone').trim()
    ]
}

const role = {
    roleCreateValidation: [
        body('name').exists().withMessage('Нет поля name').notEmpty()
            .isString()
    ],
    roleUpdateValidation: [
        body('roles').exists().withMessage('Нет поля roles').custom(value => {
            try {
                const roles = JSON.parse(value)
                for(let i = 0; i < roles.length; i++) {
                    if(roles[i].name.trim() === "") {
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

const post = {
    postCreateValidation: [
        body('name').exists().withMessage('Нет поля name').notEmpty()
            .isString()
    ],
    postUpdateValidation: [
        body('id').exists().withMessage('Нет поля id').notEmpty(),
        body('name').exists().withMessage('Нет поля name').notEmpty()
            .isString()
    ],
    postDeleteValidation: [
        body('id').exists().withMessage('Нет поля id').notEmpty()
            .isString()
    ]
}

const roleApi = {
    roleApiUpdateValidation: [
        body('roleApi').exists().withMessage('Нет поля roleApi').notEmpty()
            .isString()
    ]
}

module.exports = {
    auth,
    role,
    post,
    roleApi
}

