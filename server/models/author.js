const mongoose = require('mongoose')
const Schema = mangoose.Schema

const authorSchema = new Schema({
  name: String,
  age: Number
})

module.exports = mongoose.model('Author', authorSchema)
