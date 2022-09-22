var express = require('express');
var router = express.Router();
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.home);
router.get('/register', mainController.register);
router.get('/login', mainController.login);
router.get('/carrito', mainController.carrito);
router.get('/quienes-somos', mainController.quienes);
router.get('/nuestra-historia', mainController.historia);
router.get('/terminos', mainController.terminos);
router.get('/politica-de-privacidad', mainController.politica);
router.get('/crear', mainController.crear);

module.exports = router;