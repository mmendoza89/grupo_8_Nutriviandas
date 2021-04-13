const express = require('express');
const router = express.Router();
const path = require('path');


//Controller
const userRoleController = require(path.join(__dirname, '../controllers/userRoleController'));

//Middleware
const isOwnerMiddleware = require('../middleware/isOwnerMiddleware');

// '/' is '/user/roles'

//Get all roles
router.get('/', isOwnerMiddleware, userRoleController.index);

module.exports = router;