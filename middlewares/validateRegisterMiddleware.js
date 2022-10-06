const { body } = require('express-validator');

const validations = [
    body('fullName').notEmpty().withMessage('Te faltó poner tu nombre'),
    body('userName').notEmpty().withMessage('Te faltó poner tu usuario'),
    body('email')
        .notEmpty().withMessage('Te faltó poner tu correo electrónico').bail()
        .isEmail().withMessage('Tenes que escribir un correo válido'),
    body('password')
        .notEmpty().withMessage('Te faltó poner tu contranseña').bail()
        .isLength({min: 4, max:22}).withMessage('Tu contraseña debe contener un minimo de 4 cáracteres')
];

module.exports = validations;