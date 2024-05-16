var express = require('express');
var router = express.Router();

var ordersController = require('../orders/ordersController');

router.route('/')

 // GET ALL ORDER DATA
.get(ordersController.getOrders)


router.route('/:id')

// UPDATE ORDER
.put(ordersController.updateOrder)

// DELETE ORDER
.delete(ordersController.deleteOrder)

module.exports = router;