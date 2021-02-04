const express = require('express');
const path = require('path');

const router = express.Router();

const productCartController = require(path.join(__dirname, '../controllers/productCartController'));

router.get('/', productCartController.index);

module.exports = router;