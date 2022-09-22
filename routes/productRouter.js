var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

/* Rutas dentro de /products/... */

router.get('/listar', productController.list);
router.get('/crear', productController.crear);
router.get('/detalle/:id', productController.detail);
router.post('/crear', productController.store);
router.get('/editar/:id', productController.edit);
router.put('/editar/:id', productController.update);
router.delete('/borrar/:id', productController.destroy);
module.exports = router;