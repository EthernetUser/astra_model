const { Router } = require('express')
const router = Router()
const { UserController } = require('../controllers/user-controller')
const { verifyTokenAndRole } = require('../services/auth-service')
const { loginValidation, registerValidation } = require('../services/validation-service').auth
const validDecorator = require('../services/validatedecorator-service')

router.post('/register', verifyTokenAndRole("REGISTER"), registerValidation, validDecorator(UserController.register))
router.post('/login', loginValidation, UserController.login)

module.exports = router
