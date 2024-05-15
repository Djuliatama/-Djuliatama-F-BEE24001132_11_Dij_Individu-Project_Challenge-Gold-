var express = require('express');
var router = express.Router();

var userController = require('../user/userController');

router.route('/')
    // GET ALL USER DATA
    .get(userController.getUsers)

    // INSERT USER DATA
    .post(userController.addUser)

router.route('/:id')

    // GET USER BY ID
    .get(userController.getUserById)

    // UPDATE USER
    .put(userController.editUserById)

    // DELETE USER
    .delete(userController.deleteUser)

module.exports = router;