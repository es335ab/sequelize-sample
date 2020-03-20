const Sequelize = require('Sequelize')
const config = require('./config/config.json')
const models = require('./models')

const sequelize = new Sequelize(
  config[process.env.NODE_ENV].database,
  config[process.env.NODE_ENV].username,
  config[process.env.NODE_ENV].password,
  config[process.env.NODE_ENV].options
);

(async () => {
  const usersByQuery = await sequelize.query('select * from users').catch(error => {
    console.error(error)
  })

  const usersByModel = await models.user.findAll().catch(error => {
    console.error(error)
  })

  console.info(`usersByQuery: ${JSON.stringify(usersByQuery)}`)
  console.info(`usersByModel: ${JSON.stringify(usersByModel)}`)
})()
