const express = require('express');
const router = express.Router();
const path = require('path');


//Controller
const userController = require(path.join(__dirname, '../controllers/userController'));

//Middleware
const uploadFile = require('../middleware/multerMiddleware')
const validations = require('../middleware/validateRegisterMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const guestMiddleware = require('../middleware/guestMiddleware');
const isOwnerMiddleware = require('../middleware/isOwnerMiddleware');

//Get all users
router.get('/', isOwnerMiddleware, userController.index);

//Register form
router.get('/register', guestMiddleware, userController.register);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, userController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, userController.login);

// Procesar login
router.post('/login', userController.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, userController.profile);

// Logout
router.get('/logout/', userController.logout);

module.exports = router;