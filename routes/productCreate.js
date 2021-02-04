const express = require('express');
const path = require('path');

const router = express.Router();

const productCreateController = require(path.join(__dirname, '../controllers/productCreateController'));

router.get('/', productCreateController.index);

module.exports = router;