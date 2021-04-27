const express = require('express');
const path = require('path');

const router = express.Router();

const menusController = require(path.join(__dirname, '../controllers/menusController'));

router.get('/', menusController.index);

module.exports = router;
