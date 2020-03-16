
module.exports.login = function (req, res) {
    // res.send("Auth Login");
    res.render('auth/login');
}

module.exports.logout = function (req, res) {
  res.clearCookie('userId');
  res.clearCookie('isAdmin');
  res.render('auth/login');
}

module.exports.postLogin = function (req, res) {
    // Checked insite auth.validate
    console.log("auth.controller.postLogin");
    res.redirect('/users');
}