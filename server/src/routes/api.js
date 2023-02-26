const express = require('express')

const userRouter = require('./user/user.router')
const spotifyRouter = require('./spotify/spotify.router')

const api = express.Router()

api.use('/user', userRouter)
api.use('/spotify', spotifyRouter)

module.exports = api
