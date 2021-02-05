const { Router } = require('express')
const router = Router()
const { RoleApiController } = require('../controllers/roleapi-controller')
const { verifyTokenAndRole } = require('../services/auth-service')
const { roleApiUpdateValidation } = require('../services/validation-service').roleApi
const validDecorator = require('../services/validatedecorator-service')

router.get('/', verifyTokenAndRole("GET_ROLESAPI"), RoleApiController.get)
router.patch('/update', verifyTokenAndRole("UPDATE_ROLEAPI"), roleApiUpdateValidation, validDecorator(RoleApiController.update))

module.exports = router
