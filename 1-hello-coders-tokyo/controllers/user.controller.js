var shortid = require('shortid');
var md5 = require('md5');
var db = require('../db');

module.exports.index = function (req, res) {
  var page = parseInt(req.query.page || 1);
  var perPage = 5;
  var totalPage = db.get('users').value().length / perPage;
  totalPage = (totalPage > parseInt(totalPage) ? parseInt(totalPage) + 1 : totalPage);

  //Cach khac:
  var drop = (page - 1) * perPage;

  var start = (page - 1) * perPage;
  var end = page * perPage;

  res.render('users/index', {
    // users: users,
    // Pagination
    users: db.get('users').value().slice(start, end),
    pages: totalPage,

    // users: db.get('users').drop(drop).take(perPage).value(),
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
  // Cookies that have not been signed
  // console.log('Cookies', req.cookies);
  // Cookies that have been signed
  // console.log('Signed Cookies: ', req.signedCookies);
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
  req.body.password = md5(req.body.password);
  db.get('users').push(req.body).write();
  res.redirect('/users');
}