var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

/* Rutas dentro de /products/... */

router.get('/listar', productController.list);
router.get('/crear', productController.crear);
router.get('/detalle/:id', productController.detail);

module.exports = router;