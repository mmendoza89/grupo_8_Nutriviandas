const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const db = require("../models");
const Customer = db.Customer;
const UserRole = db.User_role;

// const User = require('../modelsJSON/User');
// const UserRole = require('../modelsJSON/Role');

const userController = {
    index: async (req, res) => {
        //is Owner
        const allUsers = await Customer.findAll();
        const usersWhithoutPasswords = allUsers.map(({ password, ...rest }) => rest);
        res.send(usersWhithoutPasswords);
    },
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

        let userInDB = Customer.findByField('email', req.body.email);

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
            avatar: req.file.filename,
            role: UserRole.getDefaultRoleName()
        }

        delete userToCreate.confirmPass;

        let userCreated = Customer.create(userToCreate);

        return res.render('users/login', {css:'login.css'});
    },
    login: (req, res) => {
        return res.render('users/login', {css:'login.css'});
    },
    loginProcess: (req, res) => {
        let resultValidation = validationResult(req);
        let userToLogin = Customer.findByField('email', req.body.email);

        if(userToLogin) {
            let comparePasswords = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(comparePasswords) {
                delete userToLogin.password;
				req.session.userLogged = userToLogin;

                //If is "owner" write it in Session
                if(userToLogin.role){
                    if(userToLogin.role == UserRole.getSuperAdminName()){
                        req.session.isOwner = true;
                    } else {
                        req.session.isOwner = false;
                    }

                    if(userToLogin.role == UserRole.getAdminName()){
                        req.session.isAdmin = true;
                    } else {
                        req.session.isAdmin = false;
                    }
                } 



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
            css:'profile.css',
            isOwner: req.session.isOwner
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = userController;