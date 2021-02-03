const express = require('express');
const router = express.Router();

const recoverPassController = require('../controllers/recoverPassController');

router.get('/', recoverPassController.recover);

module.exports = router;