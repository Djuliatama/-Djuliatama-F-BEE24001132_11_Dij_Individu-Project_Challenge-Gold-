var express = require('express');
var router = express.Router();

var itemsController = require('../items/itemsController');

router.route('/')

 // GET ALL ITEM DATA
.get(itemsController.getItems)


router.route('/:id')

// UPDATE ITEM
.put(itemsController.editItemById)

// DELETE ITEM
.delete(itemsController.deleteItem)


router.route('/search')

// SEARCH ITEM
.get(itemsController.searchItem)


module.exports = router;