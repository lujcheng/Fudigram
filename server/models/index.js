const mongoose = require('mongoose')
require("dotenv").config();

const User = require('./user')

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL)
}

const models = { User }

module.exports = { connectDb, models }
