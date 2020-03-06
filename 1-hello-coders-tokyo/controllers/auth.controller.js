var db = require('../db');

module.exports.login = function (req, res) {
    res.render('auth/login');
}

module.exports.postLogin = function (req, res) {
    // Checked insite auth.validate
    res.redirect('/users');
}