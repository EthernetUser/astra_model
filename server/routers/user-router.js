const { Router } = require('express')
const router = Router()
const { UserController } = require('@controllers/user-controller')
const { verifyTokenAndRole } = require('@services/auth-service')
const { userGetValidation
} = require('@validators/user')
const validDecorator = require('@services/validatedecorator-service')
const { user } = require('../config/roleapi.json')

router.get('/all', verifyTokenAndRole(user.getAll), UserController.getAll)
router.get('/:id', verifyTokenAndRole(user.get), userGetValidation, validDecorator(UserController.get))

module.exports = router
