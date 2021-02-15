const { Router } = require('express')
const router = Router()
const { RoleApiController } = require('@controllers/roleapi-controller')
const { verifyTokenAndRole } = require('@services/auth-service')
const { roleApiUpdateValidation } = require('@services/validation-service').roleApi
const validDecorator = require('@services/validatedecorator-service')
const { roleapi } = require('../config/roleapi.json')

router.get('/', verifyTokenAndRole(roleapi.get), RoleApiController.get)
router.patch('/update', verifyTokenAndRole(roleapi.update), roleApiUpdateValidation, validDecorator(RoleApiController.update))

module.exports = router
