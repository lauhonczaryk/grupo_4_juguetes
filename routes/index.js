const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.home);
router.get('/quienes-somos', mainController.quienes);
router.get('/nuestra-historia', mainController.historia);
router.get('/terminos', mainController.terminos);
router.get('/politica-de-privacidad', mainController.politica);
router.get('/carrito', mainController.carrito);


module.exports = router;

