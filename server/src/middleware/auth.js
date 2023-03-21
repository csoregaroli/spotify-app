const axios = require('axios')
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
  const refreshToken = req.session.refreshToken
  const expirationTime = req.session.expirationTime
  const currentTime = Date.now()

  if (expirationTime < currentTime) {
    const authOptions = {
      url: SPOTIFY_TOKEN_ENDPOINT,
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(
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

      const newAccessToken = response.data.access_token
      req.session.accessToken = newAccessToken
      req.session.expirationTime = Date.now() + 3600 * 1000
    } catch (err) {
      console.log('error', err)
    }

    next()
  } else {
    next()
  }
}

module.exports = { checkAuthentication, checkAccessToken }
