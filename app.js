const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const models = require('./models')

const app = express()

dotenv.config()

app.use(cors())

app.get('/', async(req, res) => {
  const usersByModel = await models.user.findAll().catch(error => {
    console.error(error)
  })

  res.send(usersByModel)
})

app.listen(process.env.PORT, () =>
  console.log('Listening on port ' + process.env.PORT + ' ...')
)
