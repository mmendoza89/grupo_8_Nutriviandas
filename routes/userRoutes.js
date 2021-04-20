const express = require('express');
const router = express.Router();
const path = require('path');


//Controller JSON
const userController = require(path.join(__dirname, '../controllers/userController'));
//Controller DB
const userControllerDB = require(path.join(__dirname, '../controllers/userControllerDB'));

//Middleware
const uploadFile = require('../middleware/multerMiddleware')
const validations = require('../middleware/validateRegisterMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const guestMiddleware = require('../middleware/guestMiddleware');
const isOwnerMiddleware = require('../middleware/isOwnerMiddleware');

//Get all users
router.get('/', isOwnerMiddleware, userControllerDB.index);

//Register form
router.get('/register', guestMiddleware, userControllerDB.register);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, userControllerDB.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, userController.login);

// Procesar login
router.post('/login', userController.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, userController.profile);

// Logout
router.get('/logout/', userController.logout);

module.exports = router;