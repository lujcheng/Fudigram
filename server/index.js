const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const path = require('path')

require("dotenv").config();

const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

// const { connectDb } = require('./models')

app.use(express.static(DIST_DIR))

let PORT = 8081

app.get('/', function (req, res) {
  res.sendFile(HTML_FILE)
})

const registrationRouter = require('./routes/registration')
app.use('/registration', registrationRouter)

const userRouter = require('./routes/users')
app.use('/users', userRouter)

const searchRouter = require('./routes/yelp')
app.use('/restaurants', searchRouter)

// connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
// });