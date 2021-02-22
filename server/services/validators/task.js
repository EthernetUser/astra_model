const { body, param } = require('express-validator')

const task = {
    taskGetValidation: [
        param('id').exists().withMessage('Не указан id').isString()
            .notEmpty()
    ],
    taskCreateValidation: [
        body('name').exists().isString().notEmpty(),
        body('essence').exists().isString().notEmpty(),
        body('preStartTime').exists().isString().notEmpty(),
        body('preFinishTime').exists().isString().notEmpty(),
        body('executerId').exists().isString().notEmpty()
    ],
    taskStartValidation: [
        body('id').exists().isInt().notEmpty()
    ],
    taskFinishValidation: [
        body('id').exists().isInt().notEmpty()
    ],
    taskDenyValidation: [
        body('id').exists().isInt().notEmpty()
    ],
    taskDoneValidation: [
        body('id').exists().isInt().notEmpty()
    ],
    taskDeleteValidation: [
        body('id').exists().isInt().notEmpty()
    ]
}

module.exports = task