require('dotenv').config()
console.log(process.env.PORT);

const app = require('./server')
const UserModel = require('./database')

app.get('/getUsers', (req, res) => {
  UserModel.find({}).then((users) => {
    res.json(users)
  }).catch((err) => {
    console.log(err);
  })
})

app.listen(app.get('port'), () => {
  console.log('localhost:' + app.get('port'));
})