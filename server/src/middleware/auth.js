const axios = require('axios')
const jwt = require('jsonwebtoken')

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  return res.status(401).json({
    error: 'You must log in',
  })
}

function checkAccessToken(req, res, next) {
  const accessToken = req.session.accessToken

  const decodedToken = jwt.decode(accessToken, { complete: true })

  if (decodedToken.payload.exp < Date.now() / 1000) {
    console.log(true)
  }

  next()
}

module.exports = { checkAuthentication, checkAccessToken }
