const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const passport = require('passport')
const session = require('express-session')

require('dotenv').config()

const auth = require('./routes/auth/auth')

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
  })
)
app.use(passport.initialize())
app.use(passport.session())

function ensureAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  return res.status(401).json({
    error: 'You must log in',
  })
}

app.use('/auth', auth)

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/secret', ensureAuthentication, (req, res) => {
  res.send('This is the secret page tehe')
})

module.exports = app
