const express = require('express')
const router = express.Router()
const models = require('../../models/')

router.get('/', async (req, res) => {
  const users = await models.user.findAll().catch(error => {
    console.error(error)
  })

  res.json({
    users
  })
})

module.exports = router
