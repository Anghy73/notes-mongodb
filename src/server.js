const express = require('express')
const path = require('path')

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

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app