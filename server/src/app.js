const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const passport = require('passport')

const auth = require('./routes/auth/auth')

const app = express()

app.use(helmet())
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(morgan('combined'))
app.use(passport.initialize())

app.use(express.json())

app.use('/auth', auth)

app.get('/', (req, res) => {
  res.send('Hello')
})

module.exports = app
