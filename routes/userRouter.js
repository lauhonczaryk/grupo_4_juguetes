const express = require('express');
const router = express.Router();

// CONTROLLER
const userController = require("../controllers/userController");


// MIDDLEWARES
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');


// Formulario de registro
router.get('/register', guestMiddleware, userController.register);
// Procesar el registro
router.post('/register', validations, userController.processRegister);
// Formulario de login
router.get('/login', userController.login);
// Procesar el login
router.post('/login', userController.loginProcess);
// Perfil del Usuario
router.get('/profile/', userController.profile)

module.exports = router;