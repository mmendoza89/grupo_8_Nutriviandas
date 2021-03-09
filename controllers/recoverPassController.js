const fs = require('fs');
const path = require('path');

const recoverPassController = {
    recover: (req, res) => {
        return res.render('users/recoverPassword', {css:'recoverPassword.css'});
    }
}

module.exports = recoverPassController;