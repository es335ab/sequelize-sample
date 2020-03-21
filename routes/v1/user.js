const express = require('express')
const router = express.Router()
const models = require('../../models/')

router.get('/', async (req, res) => {
  const users = await models
    .user
    .findAll({
      include: [
        {
          model: models.company
        }
      ]
    })
    .catch(error => {
      console.error(error)
    })

  res.json({
    users: users.map(user => {
      return {
        id: user.id,
        name: user.name,
        companyName: user.company.name
      }
    })
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

router.get('/:id', async (req, res) => {
  const id = req.params.id

  const user = await models
    .user
    .findOne({
      where: {
        id
      },
      include: [
        {
          model: models.company
        }
      ]
    })
    .catch(error => {
      console.error(error)
    })

  res.json({
    user
  })
})

module.exports = router
