var EquipmentModel = require('../models/equipment.model');
var UserModel = require('../models/user.model');

module.exports.equipmentList = async (req, res, next) => {
  var users = await UserModel.find();
  EquipmentModel.find().then(function (equipments) {
    res.render('equipment/equipments', {
      equipments: equipments,
      users: users,
    })
  })
}

module.exports.create = function (req, res, next) {
  res.render('equipment/equi-create');
}

// POST CREATE
module.exports.postCreate = function (req, res, next) {
  req.body.status = "1" ? true : false;
  // req.body.status = "0" ? false : true;
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

// PUT UPDATE
module.exports.getUpdate = function (req, res, next) {
  var id = req.params.id;
  var userPut;
  UserModel.find(function (err, users) {
    if (err) {
      res.send("controllers/equipment.controller/putUpdate ERROR");
    } else {
      userPut = users;
    }
  })

  EquipmentModel.findById(id).then(function (equipment) {
    res.render('equipment/equi-put', {
      equipment: equipment,
      users: userPut,
    })
  })
}

module.exports.putUpdate = function (req, res) {
  console.log(req.body);
  if (req.body.userSelectedId == undefined) {
    console.log("out");
  }
  req.body.status == '1' ? true : false;
  EquipmentModel.findOneAndUpdate({ _id: req.params.id },
    { $set: { name: req.body.name, status: req.body.status, description: req.body.description, type: req.body.type, userSelectedId: req.body.userSelectedId } }, { new: true },
    function (err, newEquipment) {
      if (err) {
        console.log('error occured');
      } else {
        // console.log(newEquipment);
        // res.status(204);
        res.redirect("/equipments");
      }
    }
  );
}


//DELETE
module.exports.deleteOne = function (req, res) {
  console.log("GO TO DELETEONE!!!!!!!!!!!!!!!");
  EquipmentModel.findOneAndRemove({ _id: req.params.id }, function (err, offer) {
    res.redirect('/equipments');
  });
};






