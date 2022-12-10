const db = require('../database/models')
const Op = db.Sequelize.Op;

const controller = {
    home: function (req, res) {
        res.render('home');
    },
    home: async function (req, res) {
        const products = await db.Products.findAll({limit: 6},{include: ['categories']})
        res.render('home', { products });
    },
    politica: function (req, res) {
        res.render('politica-de-privacidad');
    },
    terminos: function (req, res) {
        res.render('terminos');
    },
    quienes: function (req, res) {
        res.render('quienes-somos');
    },
    historia: function (req, res) {
        res.render('nuestra-historia');
    },
    crear: function (req, res) {
        res.render('create');
    },
    carrito: function (req, res) {
        res.render('carrito');
    }
}

module.exports = controller;