var express = require('express');

var controller = require('../controllers/auth.controller');
var authValidate = require('../validate/auth.validate');

// BT: CRUD = Create Retrieve Update Delete
var router = express.Router();

router.get('/login', controller.login);
router.get('/logout', controller.logout);
router.post('/login', authValidate.postLogin1, controller.postLogin);

module.exports = router;