const express = require('express')

const { httpGetAuthUser } = require('./user.controller')

const userRouter = express.Router()

userRouter.get('/', httpGetAuthUser)

module.exports = userRouter
