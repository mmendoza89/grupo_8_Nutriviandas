const db = require("../models");
const Menu = db.Menu;

const indexController = {
    index: async (req, res) => {
        let menus = await Menu.findAll();
        res.render('index', {menus: menus});
    }
}
module.exports = indexController;