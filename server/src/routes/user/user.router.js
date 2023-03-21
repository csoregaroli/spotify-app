const express = require('express')

const { checkAccessToken } = require('../../middleware/auth')
const { httpGetAuthUser } = require('./user.controller')

const userRouter = express.Router()

userRouter.get('/', checkAccessToken, httpGetAuthUser)

module.exports = userRouter
