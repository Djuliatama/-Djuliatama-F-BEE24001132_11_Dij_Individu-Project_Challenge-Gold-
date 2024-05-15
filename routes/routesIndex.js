var express = require('express');
var router = express.Router();

// GET Home Page
router.get('/', function(req, res) {
  var apis = [
      { name : 'Get All Users', url : "/api/users", method : "GET"},
      { name : 'Get User By Id', url : "/api/users/{id}", method : "GET"},
      { name : 'Insert User', url : "/api/users", method : "POST"},
      { name : 'Update User By Id', url : "/api/users/{id}", method : "PUT"},
      { name : 'Delete User By Id', url : "/api/users/{id}", method : "DELETE"}
    ];

  res.render('home', {
    title: 'Coffeeshop service restful API',
    apis: apis
  });
});

module.exports = router;