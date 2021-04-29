const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../models");
const Customer = db.Customer;
const UserRole = db.User_role;

// const User = require('../modelsJSON/User');
// const UserRole = require('../modelsJSON/Role');

const userController = {
  index: async (req, res) => {
    //is Owner
    try {
      const allUsers = await Customer.findAll({ raw: true });
      const usersWhithoutPasswords = allUsers.map(
        ({ password, ...rest }) => rest
      );
      res.send(usersWhithoutPasswords);
    } catch (error) {
      console.error("Couldn't get Users from DB. " + error);
    }
  },
  register: (req, res) => {
    console.log("register");
    return res.render("users/register", { css: "register.css" });
  },
  processRegister: async (req, res) => {
    console.log("process register");
    let resultValidation = validationResult(req);

    if (!resultValidation.isEmpty()) {
        console.log(resultValidation);
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
        css: "register.css",
      });
    }

    let userInDB = await Customer.findOne({
        where:{
            "email": req.body.email
        }
    });

    if (userInDB) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este correo electronico ya se encuentra registrado",
          },
        },
        oldData: req.body,
        css: "register.css",
      });
    }

    let fileName = req.file ? req.file.filename : 'default-profile.jpg';

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: fileName,
      role: 'guest' //Default user role
    };

    delete userToCreate.confirmPass;

    let userCreated = Customer.create(userToCreate);

    return res.render("users/login", { css: "login.css" });
  },
  login: (req, res) => {
    return res.render("users/login", { css: "login.css" });
  },
  loginProcess: async (req, res) => {
    let resultValidation = validationResult(req);

    let userToLogin = await Customer.findOne(
      {
        where: {
          email: req.body.email
        }
      }
    );

    if (userToLogin) {
      let comparePasswords = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (comparePasswords) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        //If is "owner" write it in Session
        if (userToLogin.user_role_id) {
          if (userToLogin.user_role_id == 2) {//TODO hardcoded "owner" = 2... can't reach linked table User_role. Should be Customer.user_role == "owner"
            req.session.isOwner = true;
          } else {
            req.session.isOwner = false;
          }

          if (userToLogin.user_role_id == 3) {//TODO hardcoded "admin" = 3... can't reach linked table User_role. Should be Customer.user_role == "admin"
            req.session.isAdmin = true;
          } else {
            req.session.isAdmin = false;
          }
        }

        return res.redirect("/users/profile");
      }
      return res.render("users/login", {
        errors: {
          email: {
            msg: "Credenciales inválidas",
          },
        },
        oldData: req.body,
        css: "login.css",
      });
    }

    return res.render("users/login", {
      errors: {
        email: {
          msg: "Email no registrado.",
        },
      },
      oldData: req.body,
      css: "login.css",
    });
  },
  profile: (req, res) => {
    return res.render("users/profile", {
      user: req.session.userLogged,
      css: "profile.css",
      isOwner: req.session.isOwner,
      isAdmin: req.session.isAdmin
    });
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = userController;
