const express = require('express')

const {
  httpGetCurrentTrack,
  httpGetTopTracks,
  httpGetTopArtists,
} = require('./spotify.controller')

const spotifyRouter = express.Router()

spotifyRouter.get('/current-track', httpGetCurrentTrack)
spotifyRouter.get('/top-tracks', httpGetTopTracks)
spotifyRouter.get('/top-artists', httpGetTopArtists)

module.exports = spotifyRouter
