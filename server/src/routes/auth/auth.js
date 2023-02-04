const express = require('express')

const spotifyAuthRouter = require('./spotify.router')

const auth = express.Router()

auth.use('/spotify', spotifyAuthRouter)

module.exports = auth
