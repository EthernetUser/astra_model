const {Router} = require('express')
const router = Router()
const {UserController} = require('../controllers/user-controller')
const {verifyTokenAndRole} = require('../services/auth-service')

router.post('/register', verifyTokenAndRole("register"), UserController.register)
router.post('/login', UserController.login)

module.exports = router
