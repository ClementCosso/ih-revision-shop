const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  username: String,
  password: String
})

const User = mongoose.model('users', UserSchema)

module.exports = User;