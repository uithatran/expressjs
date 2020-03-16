// var userModel = require('../models/user.model');

module.exports.checkAdmin = function (req, res, next) {

  console.info("middleWare checkAdmin: ", req.signedCookies.isAdmin);
  if (req.signedCookies.isAdmin != 'true') {
    console.log('enter');
    res.redirect('/users');
    return;
  }
  next();
};