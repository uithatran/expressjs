var express = require('express')
var userRoute = require('./routes/user.route');
var equipmentRoute = require('./routes/equipment.route');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');


var authRoute = require('./routes/auth.route');
var middlewareAuth = require('./middlewares/auth.middleware');

// getting-started.js
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/express-demo', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express()
const port = 3000

//PUG
app.set('views', './views') //views: the directory where the template files are located
app.set('view engine', 'pug')   //view engine: the template engine to use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser("hoanghon"));

// override with POST having ?_method=PUT
app.use(methodOverride('_method'))

//File PUBLIC
app.use(express.static('public'));

app.get('/', middlewareAuth.requireAuth, function (req, res) {
  res.render('index');
})

app.use('/auth', authRoute);
app.use('/users', middlewareAuth.requireAuth, userRoute);
app.use('/equipments', middlewareAuth.requireAuth, equipmentRoute);




// app.post("/addname", (req, res) => {
//   res.send("item saved to database");
//   console.log(req.body());
//   // var myData = new User(req.body);
//   // myData.save()
//   //   .then(item => {
//   //     res.send("item saved to database");
//   //   })
//   //   .catch(err => {
//   //     res.status(400).send("unable to save to database");
//   //   });
// });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))