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

router.post('/', async (req, res) => {
  // host登録時はbulkCreate で複数レコード一気に登録すると良さそう
  const user = await models.user.create({
    name: req.body.name
  }).catch(error => {
    console.error(error)
    res.json({
      status: 'ng',
      error
    })
  })

  res.json({
    status: 'ok'
  })
})

module.exports = router
