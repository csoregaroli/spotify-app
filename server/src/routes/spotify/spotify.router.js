const express = require('express')

const { checkAccessToken } = require('../../middleware/auth')
const { httpGetCurrentTrack, httpGetTopItems } = require('./spotify.controller')

const spotifyRouter = express.Router()

spotifyRouter.get('/current-track', checkAccessToken, httpGetCurrentTrack)
spotifyRouter.get('/top/:type', checkAccessToken, httpGetTopItems)

module.exports = spotifyRouter
