const { body } = require('express-validator')

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

export default post