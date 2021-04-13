function isOwnerMiddleware(req, res, next) {
	if (!req.session.isOwner) {
		console.log("Logged user is not allowed to access this.");
		return res.redirect('/users/login');
	}
	next();
}

module.exports = isOwnerMiddleware;