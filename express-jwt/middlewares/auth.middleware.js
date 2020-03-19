var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var app = express();
var config = require('../configurations/config');
 

//set secret
app.set('Secret', config.secret);

module.exports.protectedRoutes = ((req, res, next) => {
  // check header for the token
  var token = req.headers['access-token'];
  // decode token
  if (token) {
    // verifies secret and checks if the token is expired
    jwt.verify(token, app.get('Secret'), (err, decoded) => {
      if (err) {
        return res.json({ message: 'invalid token' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token  
    res.send({
      message: 'No token provided.'
    });
  }
});