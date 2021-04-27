const Menu = require('../models/Menu');

const menusController = {
    index: (req, res) => {
        let menus = Menu.findAll();
        res.render('menus/menus',{menus: menus});
    }
}

module.exports = menusController;