const express = require('express')
const app = express()
const PORT = 8080
const path = require('path')
const React = require('react')
const { renderToString } = require('react-dom/server')
const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

app.get('/', function (req, res) {
    res.sendFile(HTML_FILE)
  })

const searchRouter = require('./routes/restaurants')
app.use('/restaurants', searchRouter)


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})