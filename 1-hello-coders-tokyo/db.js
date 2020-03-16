var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json');
var db = low(adapter);


// 6.Tich hop database (lowdb)
// Set some defaults
db.defaults({
  users: [],
  products: [],
})
  .write()



module.exports = db;