const {Router} = require('express')
const router = Router()
const test = require('../controllers/test-controller')

router.post('/add', test.add)

module.exports = router
