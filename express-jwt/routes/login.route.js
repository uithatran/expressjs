var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var app = express();
var config = require('../configurations/config');
 

//set secret
app.set('Secret', config.secret);

router.post('/', (req, res) => {
  console.log(req.body);
  if (req.body.username === "aymen") {
    if (req.body.password == 123) {
      //if eveything is okey let's create our token 
      const payload = {
        check: true
      }
      var token = jwt.sign(payload, app.get('Secret'), {
        expiresIn: 1000 // expires in 24 hours
      });
      res.json({
        message: 'authentication done ',
        token: token
      });
    } else {
      res.json({ message: "please check your password !" })
    }
  } else {
    res.json({ message: "user not found !" })
  }
})

module.exports = router;