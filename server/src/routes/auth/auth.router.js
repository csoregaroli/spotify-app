const express = require('express')

const spotifyAuthRouter = require('./spotifyAuth.router')

const auth = express.Router()

auth.use('/spotify', spotifyAuthRouter)

auth.get('/signout', (req, res) => {
  req.session.accessToken = undefined
  req.logout()
  return res.redirect('/')
})

module.exports = { auth }
