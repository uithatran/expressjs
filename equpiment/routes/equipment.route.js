var express = require('express');

var controller = require('../controllers/equipment.controller');

var router = express.Router();

router.get('/', controller.equipmentList);
router.get('/create', controller.create);

module.exports = router;