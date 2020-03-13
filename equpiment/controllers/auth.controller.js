// var db = require('../db');

module.exports.login = function (req, res) {
    // res.send("Auth Login");
    res.render('auth/login');
}

module.exports.postLogin = function (req, res) {
    // Checked insite auth.validate
    console.log("auth.controller.postLogin");
    res.redirect('/users');
}