const express = require('express')
const distribuidores = require('./distribuidoresRoute')

module.exports = app => {
    app.use(express.json())
    app.use(distribuidores)
} 