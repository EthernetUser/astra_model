const { Router } = require('express')
const router = Router()
const { UserController } = require('../controllers/user-controller')
const { verifyTokenAndRole } = require('../services/auth-service')
const { loginValidation, registerValidation } = require('../services/validation-service').auth

router.post('/register', verifyTokenAndRole("REGISTER"), registerValidation, UserController.register)
router.post('/login', loginValidation, UserController.login)

module.exports = router
