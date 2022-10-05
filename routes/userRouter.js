const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

// CONTROLLER

const userController = require("../controllers/userController");


// MIDDLEWARE

const validations = [
    body('nombreApellido').notEmpty().withMessage('Te faltó poner tu nombre'),
    body('usuario').notEmpty().withMessage('Te faltó poner tu usuario'),
    body('email')
        .notEmpty().withMessage('Te faltó poner tu correo electrónico').bail()
        .isEmail().withMessage('Tenes que escribir un correo válido'),
    body('password')
        .notEmpty().withMessage('Te faltó poner tu contranseña').bail()
        .isLength({min: 4, max:22}).withMessage('Tu contraseña debe contener un minimo de 4 cáracteres')
];

// Formulario de registro
router.get('/register', userController.register);
// Procesar el registro
router.post('/register', validations, userController.processRegister);
// Formulario de registro
router.get('/login', userController.login);
// Perfil del Usuario
router.get('/profile/:userId', userController.profile)

module.exports = router;