const { Router } = require('express')
const router = Router()
const { PostController } = require('../controllers/post-controller')
const { verifyTokenAndRole } = require('../services/auth-service')
const { postCreateValidation, postDeleteValidation, postUpdateValidation } = require('../services/validation-service').post
const validDecorator = require('../services/validatedecorator-service')

router.get('/', verifyTokenAndRole("GET_POSTS"), PostController.get)
router.post('/create', verifyTokenAndRole("CREATE_POST"), postCreateValidation, validDecorator(PostController.create))
router.delete('/delete', verifyTokenAndRole("DELETE_POST"), postDeleteValidation, validDecorator(PostController.delete))
router.patch('/update', verifyTokenAndRole("UPDATE_POST"), postUpdateValidation, validDecorator(PostController.update))

module.exports = router
