const db = require("../models");
const Product = require("../models/Menu_product");
const Products = db.Menu_products;

const Menu = require('../modelsJSON/Menu');

const menuDetailController = {
    index: (req, res) => {
        let menus = Menu.findAll();
        res.render('menus/menuDetail');
    }
}

module.exports = menuDetailController;