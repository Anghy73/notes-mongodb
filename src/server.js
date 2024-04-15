const express = require('express')
const path = require('path')

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const UserModel = new mongoose.model("users", UserSchema)

const MONGODB_URI = 'mongodb://localhost:27017/notes'

mongoose.connect(MONGODB_URI).then(db => console.log('database conected'))
.catch(err => console.log('error'))

// Initializations
const app = express()


// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))

// Middlewards
app.use(express.urlencoded({extended: false}))

// Global Variables

// Routes
app.get('/', (req, res) => {
  res.send('hello world 2')
})

app.get('/getUsers', (req, res) => {
  UserModel.find({}).then((users) => {
    res.json(users)
  }).catch((err) => {
    console.log(err);
  })
})

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app