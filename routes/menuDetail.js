const express = require('express');
const path = require('path');

const router = express.Router();

const menuDetailController = require(path.join(__dirname, '../controllers/menuDetailController'));

router.get('/', menuDetailController.index);

module.exports = router;