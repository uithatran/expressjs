var User = require('../models/user.model');

// module.exports.userList = function (req, res) {
//   User.find().then(function (users) {
//     res.render('user/users', {
//       users: users,
//     })
//   })
// };

// Using async/await
// const arr = await Movie.find({ year: { $gte: 1980, $lte: 1989 } });

module.exports.userList = async (req, res) => {
  const users = await User.find()
  res.render('user/users', {
    users: users,
  })
};