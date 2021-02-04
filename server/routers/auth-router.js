const { Router } = require('express')
const router = Router()
const { UserController } = require('../controllers/user-controller')
const { verifyTokenAndRole } = require('../services/auth-service')
const { loginValidation, registerValidation } = require('../services/validation-service')

router.post('/register', registerValidation, verifyTokenAndRole("register"), UserController.register)
router.post('/login', loginValidation, UserController.login)

module.exports = router
