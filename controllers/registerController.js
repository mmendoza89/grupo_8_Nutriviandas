const fs = require('fs');
const path = require('path');

const registerController = {
    register: (req, res) => {
        return res.render('users/register');
    }
}

module.exports = registerController;