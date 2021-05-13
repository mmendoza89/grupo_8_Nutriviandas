const db = require("../models");
const Menu = db.Menu;

const menusController = {
    index: async (req, res) => {
        let menus = await Menu.findAll();
        res.render('menus/menus',{menus: menus});
    }
}

module.exports = menusController;