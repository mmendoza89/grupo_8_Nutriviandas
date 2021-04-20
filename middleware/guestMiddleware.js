function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {
        console.log("User is already logged in.");
        return res.redirect('/users/profile');
    }
    next();
}

module.exports = guestMiddleware;