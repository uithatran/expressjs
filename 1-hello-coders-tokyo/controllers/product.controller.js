var Product = require('../models/product.model');

module.exports.index = function (req, res) {

  // res.render('products', {
  //     products: db.get('products').value(),
  // });
  Product.find().then(function(products) {
    res.render('products/index', {
      products: products,
    });
  });
};
