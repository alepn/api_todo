const express = require('express')

const routes = express.Router()

const TodoController = require('./controllers/TodoController')

routes.get('/todo', TodoController.list)

module.exports = routes