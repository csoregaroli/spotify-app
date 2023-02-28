const express = require('express')

const spotifyAuthRouter = require('./spotifyAuth.router')

const auth = express.Router()

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  return res.status(401).json({
    error: 'You must log in',
  })
}

auth.use('/spotify', spotifyAuthRouter)

auth.get('/signout', (req, res) => {
  req.logout()
  return res.redirect('/')
})

module.exports = { auth, checkAuthentication }
