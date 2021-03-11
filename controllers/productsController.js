const Product = require('../models/Product');

const productsController = {
    index: (req, res) => {
        let productos = Product.findAll();
        res.render('products/products',{productos: productos});
    },
    detail: function(req, res){
        let prodId = req.params.id;
        let producto = Product.findByPk(prodId);
        res.render('products/productDetail',{product: producto});
    },
    create: function (req, res) {
        res.render("products/productCreate");
    },
    upload: function (req, res){
        let prod = req.body;
        prod['id'] = Date.now()*1;
        Product.create(prod);
        res.redirect("/products");
    },
    edit: function(req, res){
        let producto = Product.findByPk(req.params.id);
        res.render('products/productEdit',{producto: producto});
    },
    update: function (req, res){
        let product = req.body;
        product['id'] = req.params.id;
        Product.update(product);
        res.redirect("/products");
    },
    delete: function (req, res){
        Product.destroy(req.params.id);
        res.redirect("/products");
    }
}

module.exports = productsController;