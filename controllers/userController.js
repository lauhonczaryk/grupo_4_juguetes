const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
//const User = require('../services/User');
const db = require("../database/models");
const Op = db.Sequelize.Op;
//const User = db.User;

const controller = {
  register: function (req, res) {
    return res.render("register");
  },
 
  //Registro Nuevo con DB
  processRegister: async function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    const newUser = {
      name: req.body.fullName,
      email: req.body.email,
      avatar: req.file.filename,
      password: bcryptjs.hashSync(req.body.password, 10),
      privilege: 1,
    };
    let userInDb = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userInDb) {
      return res.render("register", {
        errors: {
          email: {
            msg: "Este correo ya existe",
          },
        },
        oldData: req.body,
      });
    }

    await db.User.create(newUser);

    console.log(newUser); //Vericación de Usuario Creado
    res.redirect("/user/login");
  },

  login: function (req, res) {
    res.render("login");
  },
  loginProcess: async function (req, res) {
    let userToLogin = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // console.log(req.body.password);
    // console.log(userToLogin.privilege);
    // console.log(userToLogin.password);
    // console.log(bcryptjs.hashSync(req.body.password, 10));

    if (userToLogin) {
      let passwordOk = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );

      if (passwordOk) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        // console.log(req.session.userLogged.privilege);

        if (req.body.rememberUser) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 2 });
        }

        return res.redirect("/user/profile");
      }
      res.render("login", {
        errors: {
          email: {
            msg: "Las credenciales son inválidas",
          },
        },
      });
    }

    res.render("login", {
      errors: {
        email: {
          msg: "Este correo no existe",
        },
      },
    });
  },

  profile: function (req, res) {
    res.render("userProfile", {
      user: req.session.userLogged,
    });
  },
  logout: function (req, res) {
    res.clearCookie("userEmail");
    req.session.destroy();
    res.redirect("/");
  },
};

module.exports = controller;
 // Registro Viejo con JSON
  //   processRegister: function (req, res) {
  //     const resultValidation = validationResult(req);

  //     if (resultValidation.errors.length > 0) {
  //       return res.render("register", {
  //         errors: resultValidation.mapped(),
  //         oldData: req.body,
  //       });
  //     }

  //     let userInDb = User.findByField("email", req.body.email);

  //     if (userInDb) {
  //       return res.render("register", {
  //         errors: {
  //           email: {
  //             msg: "Este correo ya existe",
  //           },
  //         },
  //         oldData: req.body,
  //       });
  //     }

  //     let userToCreate = {
  //       ...req.body,
  //       password: bcryptjs.hashSync(req.body.password, 10),
  //     };

  //     let userCreated = User.create(userToCreate);

  //     res.redirect("/user/login");
  //   },
