var db = require('../db');
var md5 = require('md5');

module.exports.postLogin1 = function (req, res, next) {
    var email = req.body.email;
    //hashed
    var password = md5(req.body.password);
    var user = db.get('users').find({email: email}).value();
    if(!user) {
        res.render('auth/login', {
            errors: [
                'User does not exist',
            ],
            values: req.body
        })
    }

    if(user.password != password) {
        res.render('auth/login', {
            errors: [
                'Wrong password',
            ],
            values: req.body
        })
    }
    res.cookie('userId', user.id, {signed:true});
    next();
}