const path = require('path')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const passport = require('passport')
const cookieSession = require('cookie-session')

require('dotenv').config()

const { auth, checkAuthentication } = require('./routes/auth/auth')
const api = require('./routes/api')

const app = express()

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      'default-src': ["'self'", '*.googleapis.com'],
    },
  })
)
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(morgan('combined'))
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(
  cookieSession({
    keys: [process.env.SESSION_SECRET],
    name: 'session',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', auth)
app.use('/api', api)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.get('/secret', checkAuthentication, (req, res) => {
  res.send('This is the secret page tehe')
})

module.exports = app
