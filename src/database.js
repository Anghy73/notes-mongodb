const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const UserModel = new mongoose.model("users", UserSchema)

const MONGODB_URI = 'mongodb://localhost:27017/notes'

mongoose.connect(MONGODB_URI).then(db => console.log('database conected'))
.catch(err => console.log('error'))