const express = require('express');
const path = require('path');

const router = express.Router();

const productsController = require(path.join(__dirname, '../controllers/productsController'));

router.get('/', productsController.index);

module.exports = router;
