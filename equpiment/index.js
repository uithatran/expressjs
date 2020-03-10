var express = require('express')
var userRoute = require('./routes/user.route');
var equipmentRoute = require('./routes/equipment.route');
// getting-started.js
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/express-demo', { useNewUrlParser: true });

const app = express()
const port = 3000

//PUG
app.set('views', './views') //views: the directory where the template files are located
app.set('view engine', 'pug')   //view engine: the template engine to use

//File PUBLIC
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
})

app.use('/users', userRoute);
app.use('/equipments', equipmentRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))