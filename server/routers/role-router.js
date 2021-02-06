const { Router } = require('express')
const router = Router()
const { RoleController } = require('../controllers/role-controller')
const { verifyTokenAndRole } = require('../services/auth-service')
const { roleCreateValidation, roleDeleteValidation, roleUpdateValidation } = require('../services/validation-service').role
const validDecorator = require('../services/validatedecorator-service')
const { role } = require('../config/roleapi.json')

router.get('/', verifyTokenAndRole(role.get), RoleController.get)
router.post('/create', verifyTokenAndRole(role.create), roleCreateValidation, validDecorator(RoleController.create))
router.delete('/delete', verifyTokenAndRole(role.delete), roleDeleteValidation, validDecorator(RoleController.delete))
router.patch('/update', verifyTokenAndRole(role.update), roleUpdateValidation, validDecorator(RoleController.update))

module.exports = router
