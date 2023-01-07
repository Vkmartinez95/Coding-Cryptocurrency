const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json(options?bodyParser.options | undefined: createServer.nextHandleFunction))
app.use(cors())

require('./routes')(app)

sequelize.sync().then(() => {
  app.listen(config.any)
  console.log(`Serverstarted on port ${config.any}`)
})