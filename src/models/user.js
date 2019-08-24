const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
})

module.exports const User = mongoose.model('User', userSchema)

