const express = require('express')

const spotifyAuthRouter = require('./spotify.router')

const auth = express.Router()

auth.use('/spotify', spotifyAuthRouter)

auth.get('/signout', (req, res) => {
  console.log(req.user)
  return res.redirect('/')
})

module.exports = auth
