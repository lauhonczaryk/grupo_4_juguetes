const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.home);
router.get('/quienes-somos', mainController.quienes);
router.get('/', mainController.historia);
router.get('/', mainController.terminos);
router.get('/', mainController.politica);
router.get('/carrito', mainController.carrito);
router.get('/preguntas', mainController.preguntas);

module.exports = router;

