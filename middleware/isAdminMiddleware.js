function isAdminMiddleware(req, res, next) {
	if (!req.session.isAdmin && !req.session.isOwner) { //admins can access (and Owners ofcourse)
		console.log("Logged user is not allowed to access this.");
		return res.redirect('/users/login');
	}
	next();
}

module.exports = isAdminMiddleware;