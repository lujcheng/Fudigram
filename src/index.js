const express = require('express')
const app = express()
const PORT = 8080

app.get('/', function (req, res) {
  res.send('hello world')
  res.render('./pages/home')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})