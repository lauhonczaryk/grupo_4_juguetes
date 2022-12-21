const express = require('express');
const router = express.Router();
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


/* Rutas dentro de /productos/... 
router.get('/product-options', productController.options);

 //hay dos rutas de crear


*/
router.get('/listar', productController.list);
router.get('/buscar', productController.buscador)

router.get('/detalle/:id', productController.detail);

router.get('/crear', productController.crear);
router.post('/crear', upload.single("productImage"), productController.store);

router.get('/editar/:id', productController.edit);
router.put('/editar/:id', upload.single("productImage"),productController.update);

router.delete('/borrar/:id', productController.destroy);


router.get('/asc', productController.asc);
router.get('/dsc', productController.dsc);

//rutas por categoría
router.get('/videojuegos', productController.videojuegos);
router.get('/airelibre', productController.airelibre);
router.get('/demesa', productController.demesa);
router.get('/juguetes', productController.juguetes);
//rutas por precio menr a....
router.get('/menos2000', productController.menos2000);
router.get('/menos4000', productController.menos4000);
router.get('/menos6000', productController.menos6000);

module.exports = router;