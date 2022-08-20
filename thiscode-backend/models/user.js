const mongoose = require('mongoose');

const userChema = new mongoose.Schema({
  email: { type: String, unique: true},
  username: { type: String},
  password: { type: String},
})


module.exports = mongoose.model('user',userChema);