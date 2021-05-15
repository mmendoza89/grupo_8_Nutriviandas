const db = require("../models");
const Menu = db.Menu;
const Menu_product = db.Menu_product;
const Product = db.Product;

const menusController = {
    index: async (req, res) => {
        let menus = await Menu.findAll();
        res.render('menus/menus',{menus: menus});
    },
    menu_products_index: async (req, res) => {
        try{
            let products = await Product.findAll({
                raw: true
            });
            let menu_products = await Menu_product.findAll({
                include: {all: true},
                raw: true,
                nest: true
              });
            // console.log("1 -.-.-.-.-.-.-.-.-.");
            // console.log(menu_products);
            return res.render('menus/menuProductsEdit',{menu_products, products});
        } catch (e) {
            console.error("Couldn't get Menu_products table.")
        }
        return res.redirect("/users/profile");
    },
    menu_products_edit: async (req, res) => {
        try {
            Menu_product.update(
                {
                    product_id: req.body.nuevoItemId
                },
                {
                    where: {
                        id: req.params.menu_product_id
                    }
                }
            )            
        } catch (e) {
            console.error("Couldn't update Menu_products id: " + menuProductID);
        }
        return res.redirect("/menus/menu_products");
    }
}

module.exports = menusController;