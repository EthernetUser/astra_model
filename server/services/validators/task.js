const { body, param } = require('express-validator')

const task = {
    taskGetValidation: [
        param('id').exists().withMessage('Не указан id').isString()
            .notEmpty()
    ],
    taskCreateValidation: [
        body('name').exists().isString().notEmpty(),
        body('essence').exists().isString().notEmpty(),
        body('preStartTime').exists().isDate().notEmpty(),
        body('preFinishTime').exists().isDate().notEmpty(),
        body('executerId').exists().isInt().notEmpty()
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

export default task