const Sequelize = require('Sequelize')
const config = require('./config/config.json')

const sequelize = new Sequelize(
  config[process.env.NODE_ENV].database,
  config[process.env.NODE_ENV].username,
  config[process.env.NODE_ENV].password,
  config[process.env.NODE_ENV].options
)

sequelize.query('select * from users').then(function(users) {
  console.log(JSON.stringify(users))
})