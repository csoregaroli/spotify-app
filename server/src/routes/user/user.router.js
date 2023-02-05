const express = require('express')

const { httpGetCurrentUser } = require('./user.controller')

const userRouter = express.Router()

userRouter.get('/', httpGetCurrentUser)

module.exports = userRouter
