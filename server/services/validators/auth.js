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

module.exports = auth