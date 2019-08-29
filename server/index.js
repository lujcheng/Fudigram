const express = require('express')
const app = express()

const path = require('path')

require("dotenv").config({ path: __dirname + "/.env" });

const PORT = 8080
const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

app.get('/', function (req, res) {
  res.sendFile(HTML_FILE)
})

const registrationRouter = require('./routes/registration')
app.use('/registration', registrationRouter)

const userRouter = require('./routes/users')
app.use('/users', userRouter)

const searchRouter = require('./routes/restaurants')
app.use('/restaurants', searchRouter)


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})