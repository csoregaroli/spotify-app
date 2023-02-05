const express = require('express')
const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy
require('dotenv').config()

const {
  createUserDocumentFromAuth,
  getUserById,
} = require('../../models/user.model')

const config = {
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
}

const AUTH_OPTIONS = {
  callbackURL: 'http://localhost:8000/auth/spotify/callback',
  clientID: config.SPOTIFY_CLIENT_ID,
  clientSecret: config.SPOTIFY_CLIENT_SECRET,
}

async function verifyCallback(accessToken, refreshToken, profile, done) {
  const user = await createUserDocumentFromAuth(profile)
  done(null, user)
}

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  getUserById(id).then((user) => {
    done(null, user)
  })
})

passport.use(new SpotifyStrategy(AUTH_OPTIONS, verifyCallback))

const spotifyAuthRouter = express.Router()

spotifyAuthRouter.get(
  '/',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
  })
)

spotifyAuthRouter.get(
  '/callback',
  passport.authenticate('spotify', {
    failureRedirect: '/auth/spotify/failure',
    session: true,
  }),
  (req, res) => {
    res.redirect('/')
  }
)

spotifyAuthRouter.get('/failure', (req, res) => {
  return res.send('Failed to log in 😔')
})

module.exports = spotifyAuthRouter
