const express = require('express')

const spotifyAuthRouter = express.Router()

function test(req, res) {
  return res.send('This is the spotify auth router')
}

spotifyAuthRouter.get('/', test)

module.exports = spotifyAuthRouter
