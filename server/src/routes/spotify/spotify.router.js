const express = require('express')

const { httpGetCurrentTrack, httpGetTopItems } = require('./spotify.controller')

const spotifyRouter = express.Router()

spotifyRouter.get('/current-track', httpGetCurrentTrack)
spotifyRouter.get('/top/:type', httpGetTopItems)

module.exports = spotifyRouter
