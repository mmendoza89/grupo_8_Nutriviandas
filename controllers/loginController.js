const fs = require('fs');
const path = require('path');

const loginController = {
    login: (req, res) => {
        return res.render('users/login');
    }
}

module.exports = loginController;