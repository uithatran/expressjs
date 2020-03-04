var express = require('express');

var controller = require('../controllers/user.controller');
// BT: CRUD = Create Retrieve Update Delete
var router = express.Router();

router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/create', controller.create);
router.get('/:id', controller.userId);

router.post('/create', controller.postCreate);

module.exports = router;