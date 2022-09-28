const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

// Formulario de registro
router.get('/register', userController.register);
// Procesar el registro
router.post('/register', userController.processRegister);
// Formulario de registro
router.get('/login', userController.login);
// Perfil del Usuario
router.get('/profile/:userId', userController.profile)

module.exports = router;