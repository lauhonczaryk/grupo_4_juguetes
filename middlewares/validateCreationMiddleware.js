const { body } = require('express-validator');

const validationsProducts = [
    body('name').notEmpty().withMessage('Ingresá el nombre del producto').bail().isLength({min:5}).withMessage('Mínimo 5 caractéres'),
    body('description')
        .notEmpty().withMessage('Ingresá una descrpción para este producto').bail().isLength({min:5}).withMessage('Mínimo 20 caractéres'),,
    body('productImage')
        .notEmpty().withMessage('Ingresála foto del producto'),
    body('category_id').notEmpty().withMessage('Ingresá el id de la categoría correspondiente: 1(Videojuegos) - 2(Aire libre) - 3(Juegos de mesa) - 4(Juguetes)'),
    body('price').notEmpty().withMessage('Ingresá un precio (sin comas, puntos ni símbolos)')
];

module.exports = validationsProducts;