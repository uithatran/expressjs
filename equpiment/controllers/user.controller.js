var User = require('../models/user.model');

module.exports.userList = function (req, res) {
  // res.render('users/users');
  User.find().then(function(users) {
    res.render('user/users', {
      users: users,
    })
  })
};
