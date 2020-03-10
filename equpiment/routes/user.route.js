var express = require('express');

var controller = require('../controllers/user.controller');

var router = express.Router();


router.get('/', controller.userList);

module.exports = router;