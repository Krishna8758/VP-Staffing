module.exports.checkLogin = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('login')
}

module.exports.checkAdmin = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/user-data')
    }
    return next();
}