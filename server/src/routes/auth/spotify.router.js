const express = require('express')
const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy

const spotifyAuthRouter = express.Router()

const AUTH_OPTIONS = {
  callbackUrl: '',
  clientId: '',
  clientSecret: '',
}

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log('Spotify profile', profile)
  done(null, profile)
}

passport.use(new SpotifyStrategy(AUTH_OPTIONS, verifyCallback))

spotifyAuthRouter.get(
  '/',
  passport.authenticate('spotify', {
    scope: '',
  })
)

spotifyAuthRouter.get(
  '/callback',
  passport.authenticate('spotify', {
    failureRedirect: '/failure',
    successRedirect: '/',
    session: false,
  }),
  (req, res) => {
    console.log('Spotify responded to us tehe')
  }
)

spotifyAuthRouter.get('/failure', (req, res) => {
  return res.send('Failed to log in 😔')
})

module.exports = spotifyAuthRouter
