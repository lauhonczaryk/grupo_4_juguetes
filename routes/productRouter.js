var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

/* Rutas dentro de /products/... */

router.get('/list', productController.list);
router.get('/crear', productController.crear);

module.exports = router;