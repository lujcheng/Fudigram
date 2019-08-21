const express = require('express')
const app = express()
const PORT = 8080
const httpsReq = require('./helpers/https-req')
const path = require('path')

app.use(express.static('/src'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/home.html'))
  })

app.get('/search', function(req, res) {
    console.log(httpsReq('https://api.yelp.com/v3/businesses/search'))
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})