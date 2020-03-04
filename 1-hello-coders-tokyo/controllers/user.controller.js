var shortid = require('shortid');

var db = require('../db');

module.exports.index = function (req, res) {
  res.render('users/index', {
    // users: users,
    users: db.get('users').value()
  });
}

// 3.Query parameters
module.exports.search = function (req, res) {
  var q = req.query.q;
  var matchedUsers = db.get('users').value().filter(function (user) {
    // user filter and indexOf in javascript
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('users/index', {
    users: matchedUsers,
  })
  console.log(req.query);
}

module.exports.create = function (req, res) {
  console.log('Cookies', req.cookies);
  res.render('users/create');
}

module.exports.userId = function (req, res) {
  var id = req.params.id;
  var user = db.get('users').find({ id: id }).value();
  res.render('users/view', {
    user: user
  });
}

module.exports.postCreate = function (req, res) {
  req.body.id = shortid.generate();
  db.get('users').push(req.body).write()
  res.redirect('/users')
}