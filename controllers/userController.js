const { validationResult } = require('express-validator');

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

        res.send('Ok, no hay errores!')
    },
    login: function (req, res) {
        res.render('login');
    },
    profile: function (req, res) {
        res.render('userProfile');
    }
}

module.exports = controller;