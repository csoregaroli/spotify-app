const express = require('express')

const { refreshAccessToken } = require('../../middleware/auth')
const { httpGetAuthUser } = require('./user.controller')

const userRouter = express.Router()

userRouter.get('/', refreshAccessToken, httpGetAuthUser)

module.exports = userRouter
