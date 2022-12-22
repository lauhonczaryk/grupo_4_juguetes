function clientMiddleware (req, res, next){
    if(req.session.userLogged.privilege == "user"){
        res.redirect('/productos/listar');
    }
    // console.log(req.session.userLogged.privilege);
    next()
}

module.exports = clientMiddleware;