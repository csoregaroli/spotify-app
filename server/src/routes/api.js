const express = require('express')

const userRouter = require('./user/user.router')

const api = express.Router()

api.use('/user', userRouter)

module.exports = api
