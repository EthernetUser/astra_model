const { Router } = require('express')
const router = Router()
const { RoleController } = require('../controllers/role-controller')
const { verifyTokenAndRole } = require('../services/auth-service')
const { roleCreateValidation, roleDeleteValidation, roleUpdateValidation } = require('../services/validation-service').role
const validDecorator = require('../services/validatedecorator-service')

router.get('/', verifyTokenAndRole("GET_ROLES"), RoleController.get)
router.post('/create', verifyTokenAndRole("CREATE_ROLE"), roleCreateValidation, validDecorator(RoleController.create))
router.delete('/delete', verifyTokenAndRole("DELETE_ROLE"), roleDeleteValidation, validDecorator(RoleController.delete))
router.patch('/update', verifyTokenAndRole("UPDATE_ROLE"), roleUpdateValidation, validDecorator(RoleController.update))

module.exports = router
