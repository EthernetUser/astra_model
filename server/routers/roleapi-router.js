const { Router } = require('express')
const router = Router()
const { RoleApiController } = require('@controllers/roleapi-controller')
const { verifyTokenAndRole } = require('@services/auth-service')
const { roleApiUpdateValidation } = require('@validators/roleapi')
const validDecorator = require('@services/validatedecorator-service')
const { roleapi } = require('../config/roleapi.json')

router.get('/', verifyTokenAndRole(roleapi.get), RoleApiController.get)
router.put('/update', verifyTokenAndRole(roleapi.update), roleApiUpdateValidation, validDecorator(RoleApiController.update))

module.exports = router
