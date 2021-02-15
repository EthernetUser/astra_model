const { Router } = require('express')
const router = Router()
const { PostController } = require('@controllers/post-controller')
const { verifyTokenAndRole } = require('@services/auth-service')
const { postCreateValidation, postDeleteValidation, postUpdateValidation } = require('@services/validation-service').post
const validDecorator = require('@services/validatedecorator-service')
const { post } = require('../config/roleapi.json')

router.get('/', verifyTokenAndRole(post.get), PostController.get)
router.post('/create', verifyTokenAndRole(post.create), postCreateValidation, validDecorator(PostController.create))
router.delete('/delete', verifyTokenAndRole(post.delete), postDeleteValidation, validDecorator(PostController.delete))
router.patch('/update', verifyTokenAndRole(post.update), postUpdateValidation, validDecorator(PostController.update))

module.exports = router
