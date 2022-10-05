const express = require('express');
const router = express.Router();

// CONTROLLER
const userController = require("../controllers/userController");


// MIDDLEWARES
const validations = require('../middlewares/validateRegisterMiddleware');


// Formulario de registro
router.get('/register', userController.register);
// Procesar el registro
router.post('/register', validations, userController.processRegister);
// Formulario de registro
router.get('/login', userController.login);
// Perfil del Usuario
router.get('/profile/:userId', userController.profile)

module.exports = router;