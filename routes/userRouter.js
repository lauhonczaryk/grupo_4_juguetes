const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");
// CONTROLLER
const userController = require("../controllers/userController");


// MIDDLEWARES
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/images/avatars'))
    },
    filename: function (req, file, cb) {
      const newFilename = 'user-' + Date.now()+ path.extname(file.originalname);
      cb(null, newFilename)
    }
  })
  const uploadAvatar = multer({storage });

// Formulario de registro
router.get('/register', guestMiddleware, userController.register);
// Procesar el registro
router.post('/register', uploadAvatar.single('avatar'), validations, userController.processRegister);
// Formulario de login
router.get('/login', guestMiddleware, userController.login);
// Procesar el login
router.post('/login', userController.loginProcess);
// Perfil del Usuario
router.get('/profile/', authMiddleware, userController.profile)
// Logout
router.get('/logout/', userController.logout)

module.exports = router;