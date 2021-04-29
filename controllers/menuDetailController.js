const Menu = require('../models/Menu');

const menuDetailController = {
    index: (req, res) => {
        let menus = Menu.findAll();
        res.render('menus/menuDetail',{menus: menus});
    }
}

module.exports = menuDetailController;