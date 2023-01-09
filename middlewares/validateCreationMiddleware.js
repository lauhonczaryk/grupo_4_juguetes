const { body } = require('express-validator');

const validateCreationMiddleware = [
    body('name').notEmpty().withMessage('Ingresá el nombre del producto').bail().isLength({min:5}).withMessage('Mínimo 5 caractéres'),
    body('description').notEmpty().withMessage('Ingresá una descrpción para este producto').bail().isLength({min:20}).withMessage('Mínimo 20 caractéres'),
    body('productImage')
        .notEmpty().withMessage('Ingresá la foto del producto').custom(
            (value, { req }) => {
                const acceptedFileExtensions = [".jpg", ".png", ".jpeg"];
                return acceptedFileExtensions.includes(path.extname(req.file.originalname));
            }
        ).withMessage("Ingresá una foto con estos formatos: .jpg, .png y .jpeg"),
    body('category_id').notEmpty().withMessage('Ingresá el id de la categoría correspondiente: 1(Videojuegos) - 2(Aire libre) - 3(Juegos de mesa) - 4(Juguetes)'),
    body('price').notEmpty().withMessage('Ingresá un precio (sin comas, puntos ni símbolos)')
];

module.exports = validateCreationMiddleware;