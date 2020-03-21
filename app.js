const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

var router = require('./routes/v1/index');
app.use('/api/v1/', router);

app.listen(process.env.PORT, () =>
  console.log('Listening on port ' + process.env.PORT + ' ...')
)
