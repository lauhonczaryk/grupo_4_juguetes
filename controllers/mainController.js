const controller = {
    home: function (req, res) {
        res.render('home');
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