const express = require('express')

const {
  httpGetCurrentTrack,
  httpGetTopItems,
  httpGetRecommendations,
  httpGetGenres,
} = require('./spotify.controller')

const spotifyRouter = express.Router()

spotifyRouter.get('/current-track', httpGetCurrentTrack)
spotifyRouter.get('/top/:type', httpGetTopItems)
spotifyRouter.get('/recommendations', httpGetRecommendations)
spotifyRouter.get('/genres', httpGetGenres)

module.exports = spotifyRouter
