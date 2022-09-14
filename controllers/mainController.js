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
}

module.exports = controller;