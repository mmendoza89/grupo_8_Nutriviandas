const db = require("../models");
const Menu = db.Menu;

const menuDetailController = {
    index: async function (req, res) {
        let menuId = req.params.id;

        let menus = await Menu.findByPk(menuId, {include: 'Products'});
        let plates = await menus.Products;
        let total = 0;
        let allPrices = [];

        for(let i = 0; i < menus.Products.length; i++) {
            allPrices.push(menus.Products[i].price);
        }

        allPrices.forEach (function(price) {
            total += +price;
        });

        // res.send(menus);
        res.render("menus/menuDetail", { menus: menus, plates, total, menuId });
    }
}

module.exports = menuDetailController;