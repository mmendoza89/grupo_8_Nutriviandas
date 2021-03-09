const fs = require('fs');
const path = require('path');

const registerController = {
    register: (req, res) => {
        return res.render('users/register', {css:'register.css'});
    }
}

module.exports = registerController;