// var db = require('../db');
var userModel = require('../models/user.model');

module.exports.requireAuth = function (req, res, next) {
    console.log("middleWare: ", req.signedCookies);
    if (!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }

    userModel.findById(req.signedCookies.userId).exec(function(err, user) {
        if(err) {
            return res.json({err})
        } else {
            if(!user) {
                return res.render('auth/login', {
                    errors: [
                        'User does not exist',
                    ],
                })
            }
            next();
        }
    });
    // if (!user) {
    //     res.redirect('auth/login');
    //     return;
    // }
    // res.locals.user = user;
    // res.send("auth middleeware");
    // next();
};