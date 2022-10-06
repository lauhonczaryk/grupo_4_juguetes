const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');

const controller = {
    register: function (req, res) {
        return res.render('register');
    },
    processRegister: function (req, res) {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDb = User.findByField('email', req.body.email);

        if (userInDb){
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este correo ya existe'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10)
        }

        let userCreated = User.create(userToCreate);

        res.redirect('/user/login');
    },
    login: function (req, res) {
        console.log(req.session);
        res.render('login');
    },
    loginProcess: function(req, res){
        let userToLogin = User.findByField('email', req.body.email);
        if(userToLogin){
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(passwordOk){
                return res.send('/user/profile');
            }
            res.render('login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
        }

        res.render('login', {
            errors: {
                email: {
                    msg: 'Este correo no existe'
                }
            }
        });
    },
    profile: function (req, res) {
        console.log(req.session);
        console.log('estas en tu perfil');
        res.render('userProfile');
    }
}

module.exports = controller;