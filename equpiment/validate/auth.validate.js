// var db = require('../db');
var md5 = require('md5');
var userModel = require('../models/user.model');

module.exports.postLogin1 = function (req, res, next) {
    var email = req.body.email;
    //hashed
    var password = md5(req.body.password);
    userModel.findOne({ email: req.body.email }).exec(function (err, user) {
        if (err) {
            return res.json({ err })
        } else {
            if (!user) {
                return res.render('auth/login', {
                    errors: [
                        'User does not exist',
                    ],
                })
            } else if(user.password != password) {
                return res.render('auth/login', {
                    errors: [
                        'Password is incorrect!!',
                    ],
                    values: req.body
                })
            }
        }
        res.cookie('userId', user.id, {signed:true});
        res.cookie('isAdmin', user.isAdmin, {signed:true});
        next();
    });
}