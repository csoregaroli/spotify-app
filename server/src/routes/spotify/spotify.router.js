const express = require('express')

const { httpGetCurrentTrack } = require('./spotify.controller')

const spotifyRouter = express.Router()

spotifyRouter.get('/current-track', httpGetCurrentTrack)

module.exports = spotifyRouter
