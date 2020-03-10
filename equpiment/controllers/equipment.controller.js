var EquipmentModel = require('../models/equipment.model');

module.exports.equipmentList = function (req, res, next) {
  EquipmentModel.find().then(function(equipments) {
    res.render('equipment/equipments', {
      equipments: equipments,
    })
  })
}

module.exports.create = function (req, res, next) {
  // EquipmentModel.create().then(function(equipments) {
  //   res.render('equipment/equipments', {
  //     equipments: equipments,
  //   })
  // })
}


