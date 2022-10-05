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

        userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10)
        }

        let userCreated = User.create(userToCreate);

        res.redirect('/user/login');
    },
    login: function (req, res) {
        res.render('login');
    },
    profile: function (req, res) {
        res.render('userProfile');
    }
}

module.exports = controller;