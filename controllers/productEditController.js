// const ProductToEdit = require('../models/Product');

const productEditController = {
    index: function (req, res) {
        // let products = ProductToEdit.findAll();
        res.render("products/productEdit", {css: 'productCreate-Edit.css'});
    }
}

module.exports = productEditController;