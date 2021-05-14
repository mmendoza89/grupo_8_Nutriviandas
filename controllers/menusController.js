const db = require("../models");
const Menu = db.Menu;
const Menu_product = db.Menu_product;

const menusController = {
    index: async (req, res) => {
        let menus = await Menu.findAll();
        res.render('menus/menus',{menus: menus});
    },
    menu_products_index: async (req, res) => {
        try{
            //let menu_products = await Menu_product.findAll({ include: { all: true }});
            let menu_products = await Menu_product.findAll();
            console.log("-.-.-.-.-.-.-.-.-.");
            console.log(menu_products);
            return res.render('menus/menuProductsEdit',{menu_products: menu_products});
        } catch (e) {
            console.error("Couldn't get Menu_products table.")
        }
        return res.redirect("/users/profile");
    },
    menu_products_edit: async (req, res) => {
        let menuProductID = req.params.id;
        let data = req.body;
        try {
            Menu_product.update(
                {data},
                {
                    where: {
                        id: menuProductID
                    }
                }
            )            
        } catch (e) {
            console.error("Couldn't update Menu_products id: " + menuProductID);
        }
        return res.redirect("menus/menuProductsEdit");
    }
}

module.exports = menusController;