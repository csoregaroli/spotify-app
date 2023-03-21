const axios = require('axios')
const { query } = require('express')
const querystring = require('querystring')
require('dotenv').config()

const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const config = {
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
}

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  return res.status(401).json({
    error: 'You must log in',
  })
}

async function checkAccessToken(req, res, next) {
  const accessToken = req.session.accessToken
  const refreshToken = req.session.refreshToken
  const expirationTime = req.session.expirationTime
  const currentTime = Date.now()

  console.log('oldAccessToken', accessToken)
  console.log(expirationTime < currentTime)

  if (expirationTime < currentTime) {
    console.log('access token expired')
    const authOptions = {
      url: SPOTIFY_TOKEN_ENDPOINT,
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(
            config.SPOTIFY_CLIENT_ID + ':' + config.SPOTIFY_CLIENT_SECRET
          ).toString('base64'),
      },
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    }

    try {
      const response = await axios.post(authOptions.url, authOptions.data, {
        headers: authOptions.headers,
      })

      console.log('response', response.status)
      const newAccessToken = response.data.access_token
      req.session.accessToken = newAccessToken
      console.log('new access token', newAccessToken)
    } catch (err) {
      console.log('error', err)
    }

    next()
  }

  next()
}

module.exports = { checkAuthentication, checkAccessToken }
