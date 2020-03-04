var db = require('../db');

module.exports.login = function (req, res) {
    res.render('auth/login');
}

module.exports.postLogin = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('users').find({email: email}).value();
    var errors = []

    if(!user) {
        res.render('auth/login', {
            errors: [
                'User does not exist',
            ]
        })
    }

    if(user.password != password) {
        res.render('auth/login', {
            errors: [
                'Wrong password',
            ]
        })
    }

    res.redirect('/users');
}