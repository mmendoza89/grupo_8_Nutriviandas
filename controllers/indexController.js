const fs = require('fs');
const path = require('path');

const indexController = {
    index: (req, res) => {
        return res.render('index');
    }
}
module.exports = indexController;