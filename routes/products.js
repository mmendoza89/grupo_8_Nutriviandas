const express = require('express');
const path = require('path');

const router = express.Router();
const productsControllerDB = require(path.join(__dirname, '../controllers/productsControllerDB'));

const isAdminMiddleware = require('../middleware/isAdminMiddleware');

router.get('/', isAdminMiddleware, productsControllerDB.index);
router.get('/create', isAdminMiddleware, productsControllerDB.create);
router.post('/create', isAdminMiddleware, productsControllerDB.upload);
router.get('/:id', isAdminMiddleware, productsControllerDB.detail);
router.put('/:id', isAdminMiddleware, productsControllerDB.update);
router.delete('/:id/delete', isAdminMiddleware, productsControllerDB.delete);
router.get('/:id/edit', isAdminMiddleware, productsControllerDB.edit);

module.exports = router;
