const controller = {
    register: function (req, res) {
        res.render('register');
    },
    processRegister: function (req, res) {
        return res.send('OK, viniste por post');
    },
    login: function (req, res) {
        res.render('login');
    },
    profile: function (req, res) {
        res.render('userProfile');
    }
}

module.exports = controller;