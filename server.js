const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

// Mongo
mongoose.connect('mongodb://root:rootpwd@localhost:27017/todos?authSource=admin', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(port)