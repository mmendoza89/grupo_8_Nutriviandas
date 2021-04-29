const path = require('path');
const User = require('../models/User');
const { body } = require('express-validator');

const validations = [
    body('email').trim().notEmpty().withMessage('Debes escribir un email').isEmail().toLowerCase()
    // .custom(value => {
    //     return User.findByField(value).then(user => {
    //         if (user) {
    //           return Promise.reject('E-mail se encuentra registrado');
    //         }
    //       });
    // })
    ,
    body('firstName').trim().notEmpty().withMessage('Debes escribir un nombre').isLength({ min: 2 }).withMessage('Debe contener al menos 2 carácteres'),
    body('lastName').trim().notEmpty().withMessage('Debes escribir un apellido').isLength({ min: 2 }).withMessage('Debe contener al menos 2 carácteres'),
    body('password').trim().notEmpty().withMessage('Debes escribir una contraseña').isLength({ min: 8 })
    .withMessage('Debe contener al menos 5 carácteres').matches(/\d/).withMessage('Debe contener un numero'),
    body('confirmPass').notEmpty().withMessage('Debes confirmar la contraseña').custom((value, {req}) => {
        if(value !== req.body.password) {
            throw new Error('Contraseñas no coinciden')
        }
        return true;
    }),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg'];

        
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }

        return true; 
    })
]

module.exports = validations;

//custom validations