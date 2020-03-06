var express = require('express');
var cookieParser = require('cookie-parser')

//sign in route
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

// add middleware
var middlewareAuth = require('./middlewares/auth.middleware');

var port = 3000;

var app = express();

app.set('views', './views') //views: the directory where the template files are located
app.set('view engine', 'pug')   //view engine: the template engine to use

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('bdjsbafkjbsdklbja'));

app.use(express.static('public'));
// var users = [
//     { id: 1, name: 'Superman' },
//     { id: 2, name: 'Hero' },
//     { id: 3, name: 'Hero1' },

// ];

// GET POST PUT DELETE PATCH
// function callback()
// request: what the user pushed
// response: what the server returned 
app.get('/', middlewareAuth.requireAuth, function (req, res) {
    // res.send('<h1>Hello Codes.Tokyo</h1><a href="/users">User list</a>');  //use directly on index.js

    //used template engines "PUG"
    // index: path
    // 2th parameter: object(key:value)
    res.render('index', {
        name: "Coders.Tokyo update",
    });
});

// get router from another folder
app.use('/users', middlewareAuth.requireAuth, userRoute);
app.use('/auth', authRoute);

app.listen(port, function () {
    console.log('Server listening on ' + port);
});