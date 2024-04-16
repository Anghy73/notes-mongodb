const mongoose = require('mongoose')
const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env

const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const UserModel = new mongoose.model("users", UserSchema)

mongoose.connect(MONGODB_URI).then(db => console.log('database conected'))
.catch(err => console.log('error'))

module.exports = UserModel