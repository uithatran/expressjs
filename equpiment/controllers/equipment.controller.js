var EquipmentModel = require('../models/equipment.model');

module.exports.equipmentList = function (req, res, next) {
  EquipmentModel.find().then(function (equipments) {
    res.render('equipment/equipments', {
      equipments: equipments,
    })
  })
}

module.exports.create = function (req, res, next) {
  res.render('equipment/equi-create');
}

module.exports.postCreate = function (req, res, next) {
  req.body.status = "1" ? true : false;
  req.body.status = "0" ? false : true;
  console.log(req.body);
  var myData = new EquipmentModel(req.body);
  myData.save()
    .then(item => {
      res.send("data saved to database");
    })
    .catch(err => {
      // res.status(400).send("unable to save to database");
    });
  res.redirect('/equipments');
}

module.exports.getUpdate = function (req, res, next) {
  var id = req.params.id;
  EquipmentModel.findById(id).then(function (equipment) {
    res.render('equipment/equi-put', {
      equipment: equipment,
    })
  })
}

module.exports.equipmentUpdate = function(req, res) 
{
  req.body.status = "1" ? true : false;
  req.body.status = "0" ? false : true;
  console.log("goto update");
  EquipmentModel.findOneAndUpdate({
    _id: req.params.id
  },
  {$set: {name: req.body.name, status:req.body.status, description: req.body.description, type: req.body.type}},
    {upsert: true},
    function(err, newEquipment) {
      if(err) {
        console.log('error occured');
      } else {
        console.log(newEquipment);
        res.status(204);
      }
  });
  res.redirect("/equipments");
}

// module.exports.equipmentUpdate = function (req, res, next) {
//   req.body.status = "1" ? true : false;
//   console.log(req.body);
//   EquipmentModel.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, equipment) {
//     if (err) return next(err);
//     res.send('Equipment udpated.');
//   });
//   res.redirect('/equipments');
// }

//Delete
module.exports.deleteOne = function (req,res){
  console.log("GO TO DELETEONE!!!!!!!!!!!!!!!");
  EquipmentModel.findOneAndRemove({_id: req.params.id}, function (err,offer){
    res.redirect('/equipments');
  });
};






