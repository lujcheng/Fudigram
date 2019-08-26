const mongoose = require('mongoose')
require("dotenv").config({ path: __dirname + "/.env" });

const User = require('./user')

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL)
}

const models = { User }

module.exports = { connectDb, models }
