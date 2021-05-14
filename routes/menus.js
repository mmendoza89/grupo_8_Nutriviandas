const express = require('express');
const path = require('path');

const router = express.Router();

const menusController = require(path.join(__dirname, '../controllers/menusController'));

const isAdminMiddleware = require('../middleware/isAdminMiddleware');

router.get('/', menusController.index);
router.get('/menu_products', isAdminMiddleware, menusController.menu_products_index);
router.post('/menu_products/:id', isAdminMiddleware, menusController.menu_products_edit);

module.exports = router;
