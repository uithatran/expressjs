const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  app = express();
var productRoute = require('./routes/products.route');
var loginRoute = require('./routes/login.route');
var ProtectedRoutes = require('./middlewares/auth.middleware');

// use morgan to log requests to the console
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


app.listen(3001, () => {

  console.log('server is running on port 3000')

});


app.get('/', function (req, res) {
  res.send('Hello world  app is running on http://localhost:3000/');
});

// const ProtectedRoutes = express.Router();
app.use('/authenticate', loginRoute);
app.use('/api', ProtectedRoutes.protectedRoutes, productRoute);

