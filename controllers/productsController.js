const Products = require('../models/Product');

const productsController = {
    index: (req, res) => {
        let productos = Products.findAll();
        res.render('products/products',{productos: productos});
    },
    detail: function(req, res){
        let prodId = req.params.id;
        let producto = Products.findByPk(prodId);
        res.render('products/productDetail',{product: producto});
    },
    create: function (req, res) {
        res.render("products/productCreate");
    },
    upload: function (req, res){
        let prod = req.body;
        console.log("producto a crear___________-");
        console.log(prod);

        res.send("Producto a crear: " + prod["product-name"]);
    },
    edit: function(req, res){
        let prodId = req.params.id;
        res.render('products/productEdit',{productId: prodId});
    },
    update: function (req, res){
        let prod = req.body;
        console.log("producto a actualizar/modificar/editar___________-");
        console.log(prod);

        res.send("Producto a actualizar/modificar/editar: " + prod["product-name"]);
    },
    delete: function (req, res){
        let prod = req.body;
        console.log("producto a BORRAR___________-");
        console.log(prod);

        res.send("Producto a BORRAR: " + prod["product-name"]);
    }
}

module.exports = productsController;