const express = require('express')
const app = express()
const PORT = 8080
const httpsReq = require('./helpers/https-req')
const path = require('path')
const home = require('./pages/home')
const React = require('react')
const { renderToString } = require('react-dom/server')
const template = require('./template')

app.use('/', home);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/home.html'))
  })

app.get('/search', function(req, res) {
    console.log(httpsReq('https://api.yelp.com/v3/businesses/search'))
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})