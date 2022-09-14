var express = require('express');
var router = express.Router();
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.home);
router.get('/register', mainController.register);
router.get('/login', mainController.login);
router.get('/carrito', mainController.carrito);

module.exports = router;