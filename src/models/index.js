const mongoose = require('mongoose')
const DATABASE_URL = require('../database/mongodb.env')

const User = require('./user')

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL)
}

const models = { User }

module.exports = { connectDb, models }
