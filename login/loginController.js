const LoginService = require("../login/loginService");

const Service = new LoginService();

const showLogin = (req, res) => {
    res.render('login');
};

const logMeIn = (req, res) => {
  try {
    if(Service.checkLogin(req.body.username, req.body.password) == true) {
      res.send(`Username: ${req.body.username} Password: ${req.body.password}`);
    }
  } catch (error) {
    console.error(err);
    res.status(404).json({ code: 404, status: "404 not found" });
  }
};


// const logMeIn = (req, res) => {
//   if(Service.checkLogin(req.body.username, req.body.password) == true) {
//     res.send(`Username: ${req.body.username} Password: ${req.body.password}`);
//   } else {
//     res.status(404).json({code: 404,status:"404 not found"})
//   }
// };

module.exports = {
    showLogin,
    logMeIn
};