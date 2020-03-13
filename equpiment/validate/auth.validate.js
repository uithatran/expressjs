// var db = require('../db');
var md5 = require('md5');
var userModel = require('../models/user.model');

module.exports.postLogin1 = function (req, res, next) {
    console.log("postLogin1");
    var email = req.body.email;
    //hashed
    var password = md5(req.body.password);
    console.log(req.body);
    // user = userModel.findOne({email: req.body.email})
    // var user = db.get('users').find({email: email}).value();
    userModel.findOne({ email: req.body.email }).exec(function (err, user) {
        if (err) {
            return res.json({ err })
        } else {
            if (!user) {
                // return res.json({err: 'Username and Password are incorrect'})
                return res.render('auth/login', {
                    errors: [
                        'User does not exist',
                    ],
                })
            } else if(user.password != password) {
                return res.render('auth/login', {
                    errors: [
                        'PW does not exist',
                    ],
                    values: req.body
                })
            }
            // window.alert(user);
            console.log(user);
        }
        res.cookie('userId', user.id, {signed:true});
        next();
    });
    // if(!user) {
    //     res.render('auth/login', {
    //         errors: [
    //             'User does not exist',
    //         ],
    //         values: req.body
    //     })
    // }

    // if(user.password != password) {
    //     res.render('auth/login', {
    // errors: [
    //     'Wrong password',
    // ],
    // values: req.body
    //     })
    // }
    
    // next();
}