const express = require('express')
const router = express.Router()

router.use('/users', require('./user.js'))

module.exports = router
