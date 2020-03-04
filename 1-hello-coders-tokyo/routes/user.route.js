var express = require('express');

var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

// BT: CRUD = Create Retrieve Update Delete
var router = express.Router();

router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/create', controller.create);
router.get('/:id', controller.userId);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;