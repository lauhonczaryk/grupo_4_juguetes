const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const { body } = require('express-validator');

const validations = [
    body('nombreApellido').notEmpty().withMessage('Te faltó poner tu nombre'),
    body('usuario').notEmpty().withMessage('Te faltó poner tu usuario'),
    body('email').notEmpty().withMessage('Te faltó poner tu correo electrónico'),
    body('password').notEmpty().withMessage('Te faltó poner tu contranseña')
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