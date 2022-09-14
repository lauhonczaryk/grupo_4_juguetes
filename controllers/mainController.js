const controller = {
    home: function (req, res) {
        res.render('home');
    },
    carrito: function (req, res) {
        res.render('carrito');
    },
    login: function (req, res) {
        res.render('login');
    },
    register: function (req, res) {
        res.render('register');
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
    }
}

module.exports = controller;