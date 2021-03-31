function isAdminMiddleware(req, res, next) {
	if (!req.session.isAdmin) {
		console.log("Logged user is not allowed to access this.");
		return res.redirect('/users/login');
	}
	next();
}

module.exports = isAdminMiddleware;