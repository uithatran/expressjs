var express = require('express');
var EquipmentModel = require('../models/equipment.model');

var controller = require('../controllers/equipment.controller');

var router = express.Router();

router.get('/', controller.equipmentList);
router.get('/create', controller.create);
router.post('/create', controller.postCreate);
router.get('/update/:id', controller.getUpdate);
router.put('/update/:id', controller.putUpdate);
router.delete('/delete/:id', controller.deleteOne);

module.exports = router;