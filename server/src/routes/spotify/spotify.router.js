const express = require('express')
const {
  checkAuthentication,
  checkAccessToken,
} = require('../../middleware/auth')
const {
  httpGetCurrentTrack,
  httpGetTopItems,
  httpGetRecommendations,
  httpGetGenres,
} = require('./spotify.controller')

const spotifyRouter = express.Router()

spotifyRouter.use(checkAuthentication)
spotifyRouter.use(checkAccessToken)

spotifyRouter.get('/current-track', httpGetCurrentTrack)
spotifyRouter.get('/top/:type', httpGetTopItems)
spotifyRouter.get('/recommendations', httpGetRecommendations)
spotifyRouter.get('/genres', httpGetGenres)

module.exports = spotifyRouter
