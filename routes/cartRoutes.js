const express = require('express');
const path = require('path');

const router = express.Router();

const cartController = require(path.join(__dirname, '../controllers/cartController'));

router.get('/', cartController.index);

module.exports = router;
