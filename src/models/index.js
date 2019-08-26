const mongoose = require('mongoose')
require("dotenv").config({ path: __dirname + "/.env" });

const User = require('./user')

const connectDb = () => {
  return mongoose.connect('mongodb://localhost:27017/test')
}

const models = { User }

module.exports = { connectDb, models }
