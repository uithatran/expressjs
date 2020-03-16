var UserModel = require('../models/user.model');

module.exports.postCreate = function (req, res, next) {
  var errors = [];

  if (!req.body.name) {
    errors.push('Name is required');
  }

  if (!req.body.phone) {
    errors.push('Phone is required');
  }

  //Learn falsy and trutly
  if (errors.length) {
    res.render('user/create', {
      errors: errors,
      values: req.body
    });
    return;
  }
  next();
}
module.exports.notDeleteAdmin = function (req, res, next) {
  var id = req.params.id;
  UserModel.findById(id, function (err, user) {
    if (err) {
      res.send("Error in notDeleteAdmin");
    } else {
      console.log("user: " + user.email);
      if (user.email === "admin@gmail.com") {
        console.log("Check ok");
        res.render('index', {
          errors: ['Cannot delete admin'],
        })
        return;
      }
    }
  })
  // next();
}