var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");
const multer = require('multer');
const path = require("path");

//Definimos constante Storage donde decime donde y como se van a guardar los archivos que subimos

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/images/products-img'))
    },
    filename: function (req, file, cb) {
      const newFilename = file.fieldname + Date.now() + '-' + path.extname(file.originalname);
      cb(null, newFilename)
    }
  })
  
  const upload = multer({ storage: storage }); // Defino la variable upload que despues le voy aplicar el .single dentro de la ruta POST


/* Rutas dentro de /products/... */

router.get('/listar', productController.list);
router.get('/crear', productController.crear);
router.get('/detalle/:id', productController.detail);
router.post('/crear', upload.single("productImage"), productController.store); //
router.get('/editar/:id', productController.edit);
router.put('/editar/:id', productController.update);
router.delete('/borrar/:id', productController.destroy);



module.exports = router;