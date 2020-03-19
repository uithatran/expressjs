var express = require('express');
var router = express.Router();

router.get('/getAllProducts', (req, res) => {
  let products = [
    {
      id: 1,
      name: "cheese"
    },
    {
      id: 2,
      name: "carottes"
    }
  ]
  res.json(products);
})

module.exports = router;