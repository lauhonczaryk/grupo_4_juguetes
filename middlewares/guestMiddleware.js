function guestMiddleware (req, res, next){
    if(req.session.userLogged){
        res.redirect('/user/profile');
    }
    next()
}

module.exports = guestMiddleware;