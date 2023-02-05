const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const passport = require('passport')
const session = require('express-session')

require('dotenv').config()

const { auth, checkAuthentication } = require('./routes/auth/auth')
const api = require('./routes/api')

const app = express()

app.use(helmet())
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(morgan('combined'))
app.use(express.json())

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', auth)
app.use('/api', api)

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/secret', checkAuthentication, (req, res) => {
  res.send('This is the secret page tehe')
})

module.exports = app
