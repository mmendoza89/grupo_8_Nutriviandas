const express = require('express');
const path = require('path');

const router = express.Router();

// This is the controller that works with the JSON
const productsController = require(path.join(__dirname, '../controllers/productsController'));
// This is the controller that works with the DB
const productsControllerDB = require(path.join(__dirname, '../controllers/productsControllerDB'));

const isAdminMiddleware = require('../middleware/isAdminMiddleware');

router.get('/', productsControllerDB.index);
router.get('/create', isAdminMiddleware, productsController.create);
router.post('/create', isAdminMiddleware, productsController.upload);
router.get('/:id', productsControllerDB.detail);
router.put('/:id', isAdminMiddleware, productsController.update);
router.delete('/:id/delete', isAdminMiddleware, productsController.delete);
router.get('/:id/edit', isAdminMiddleware, productsControllerDB.edit);

module.exports = router;
