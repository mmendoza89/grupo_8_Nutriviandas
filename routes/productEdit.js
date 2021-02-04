const express = require('express');
const path = require('path');

const router = express.Router();

const productEditController = require(path.join(__dirname, '../controllers/productEditController'));

router.get('/', productEditController.index);

module.exports = router;