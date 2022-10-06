function authMiddleware (req, res, next){
    if(!req.session.userLogged){
        res.redirect('/user/login');
    }
    next()
}

module.exports = authMiddleware;