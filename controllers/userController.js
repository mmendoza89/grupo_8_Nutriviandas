const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

const User = require('../models/User');

const userController = {
    register: (req, res) => {
        return res.render('users/register', {css:'register.css'});
    },
    processRegister: (req, res) => {
        let resultValidation = validationResult(req);
        
        if (!resultValidation.isEmpty()) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
                oldData: req.body,
                css:'register.css'
		    });
        }

        let userInDB = User.findByField('email', req.body.email);

        if(userInDB){
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este correco electronico ya se encuentra registrado'
                    }
                },
                oldData: req.body,
                css:'register.css'
            })
            
        }
    
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        delete userToCreate.confirmPass;

        let userCreated = User.create(userToCreate);

        return res.render('users/login', {css:'login.css'});
    },
    login: (req, res) => {
        return res.render('users/login', {css:'login.css'});
    },
    loginProcess: (req, res) => {
        let resultValidation = validationResult(req);
        let userToLogin = User.findByField('email', req.body.email);

        if(userToLogin) {
            let comparePasswords = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(comparePasswords) {
                delete userToLogin.password;
				req.session.userLogged = userToLogin;

                return res.redirect('/users/profile');
            }
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Credenciales inválidas'
                    }
                },
                oldData: req.body,
                css:'login.css'
            });
        }
        
        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'Email no registrado.'
                }
            },
            oldData: req.body,
            css:'login.css'
        });
    },
    profile: (req, res) => {
		return res.render('users/profile', {
			user: req.session.userLogged,
            css:'profile.css'
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = userController;