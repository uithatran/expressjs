var express = require('express')
var userRoute = require('./routes/user.route');
var equipmentRoute = require('./routes/equipment.route');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var md5 = require('md5'); 
console.log(md5("123"));


var authRoute = require('./routes/auth.route');
var middlewareAuth = require('./middlewares/auth.middleware');
var middlewareAdmin = require('./middlewares/admin.middleware');

// getting-started.js
var mongoose = require('mongoose');
// , useUnifiedTopology: true  // Ben trong mongoose.connect
mongoose.connect('mongodb://localhost/express-demo', { useNewUrlParser:true, useUnifiedTopology: true});

const app = express()
const port = 3000

//PUG
app.set('views', './views') //views: the directory where the template files are located
app.set('view engine', 'pug')   //view engine: the template engine to use

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser("hoanghon"));

// override with POST having ?_method=PUT
app.use(methodOverride('_method'))

//File PUBLIC
app.use(express.static('public'));

app.get('/', middlewareAuth.requireAuth, function (req, res) {
  res.render('index', {
    userId: req.signedCookies.userId,
  });
})

app.use('/auth', authRoute);
app.use('/users', middlewareAuth.requireAuth, userRoute);
app.use('/equipments', middlewareAuth.requireAuth, middlewareAdmin.checkAdmin, equipmentRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))