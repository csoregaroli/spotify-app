const express = require('express')

const {
  httpGetCurrentTrack,
  httpGetTopItems,
  httpGetRecommendations,
} = require('./spotify.controller')

const spotifyRouter = express.Router()

spotifyRouter.get('/current-track', httpGetCurrentTrack)
spotifyRouter.get('/top/:type', httpGetTopItems)
spotifyRouter.get('/recommendations', httpGetRecommendations)

module.exports = spotifyRouter
