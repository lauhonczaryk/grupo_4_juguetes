const { body } = require('express-validator');

const validations = [
    body('fullName').notEmpty().withMessage('Ingresá tu nombre').bail().isLength({min:2}).withMessage('Ingresá un nombre válido'),
    body('email')
        .notEmpty().withMessage('Ingresá un correo electrónico').bail()
        .isEmail().withMessage('Ingresá un correo válido'),
   body('avatar').notEmpty().withMessage('Ingresá una imágen de perfil'),
    body('password')
        .notEmpty().withMessage('Ingresá una contranseña').bail()
        .isLength({min: 8}).withMessage('Tu contraseña debe contener un mínimo de 8 caracteres')
];

module.exports = validations;