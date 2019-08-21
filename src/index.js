const express = require('express')
const app = express()
const PORT = 8080
const httpsReq = require('./helpers/https-req')


app.route('/')
  .get(function (req, res) {
    res.send('hello world')
    res.render('./pages/home.html')
  })

app.route('/search')
  .get(function(req, res) {
    console.log(httpsReq('https://api.yelp.com/v3/businesses/search'))
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})