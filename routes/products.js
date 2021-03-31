const express = require('express');
const path = require('path');

const router = express.Router();

const productsController = require(path.join(__dirname, '../controllers/productsController'));

const isAdminMiddleware = require('../middleware/isAdminMiddleware');

router.get('/', productsController.index);
router.get('/create', isAdminMiddleware, productsController.create);
router.post('/create', isAdminMiddleware, productsController.upload);
router.get('/:id', productsController.detail);
router.put('/:id', isAdminMiddleware, productsController.update);
router.delete('/:id/delete', isAdminMiddleware, productsController.delete);
router.get('/:id/edit', isAdminMiddleware, productsController.edit);

module.exports = router;
