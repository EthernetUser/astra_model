const { Router } = require('express')
const router = Router()
const { RoleController } = require('../controllers/role-controller')
const { verifyTokenAndRole } = require('../services/auth-service')
const { roleCreateValidation, roleDeleteValidation, roleUpdateValidation } = require('../services/validation-service').role

router.get('/', verifyTokenAndRole("GET_ROLES"), RoleController.get)
router.post('/create', verifyTokenAndRole("CREATE_ROLE"), roleCreateValidation, RoleController.create)
router.delete('/delete', verifyTokenAndRole("DELETE_ROLE"), roleDeleteValidation, RoleController.delete)
router.patch('/update', verifyTokenAndRole("UPDATE_ROLE"), roleUpdateValidation, RoleController.update)

module.exports = router
