const express = require('express')
const app = express()

const path = require('path')
const React = require('react')
require("dotenv").config({ path: __dirname + "/.env" });

const PORT = 8080
const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

// const {models, connectDb} = require('../src/models')
// // const connectDb = models.connectDb

// connectDb().then(async () => {
//   app.listen(process.env.PORT, () =>
//     console.log(`Example app listening on port ${process.env.PORT}!`),
//   );
// });


app.use(express.static(DIST_DIR))

app.get('/', function (req, res) {
  res.sendFile(HTML_FILE)
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

const searchRouter = require('./routes/restaurants')
app.use('/restaurants', searchRouter)


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})