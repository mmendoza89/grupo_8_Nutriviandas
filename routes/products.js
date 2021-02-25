const express = require('express');
const path = require('path');

const router = express.Router();

const productsController = require(path.join(__dirname, '../controllers/productsController'));

router.get('/', productsController.index);
router.get('/create', productsController.create);
router.post('/create', productsController.upload);
router.get('/:id', productsController.detail);
router.put('/:id', productsController.update);
router.delete('/:id/delete', productsController.delete);
router.get('/:id/edit', productsController.edit);

module.exports = router;
