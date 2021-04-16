const db = require("../models");
const sequelize = db.sequelize;
const Product = require('../models/product');
const Products = db.Product;

const productsController = {
    index: async function(req, res) {
        let productos = await Products.findAll();
        res.render('products/products',{productos: productos});
    },
    detail: async function(req, res){
        let prodId = req.params.id;
        let producto = await Products.findByPk(prodId);
        let isAdmin = req.session.isAdmin || req.session.isOwner;
        res.render('products/productDetail',{product: producto, isAdmin});
    },
    create: function (req, res) {
        res.render("products/productCreate");
    },
    upload: function (req, res){
        let prod = req.body;
        prod['id'] = Date.now()*1;
        Products.create(prod);
        return res.redirect("/products");
    },
    edit: async function(req, res){
        let producto = await Products.findByPk(req.params.id);
        res.render('products/productEdit',{producto: producto});
    },
    update: function (req, res){
        let product = req.body;
        product['id'] = req.params.id;
        Products.update(product);
        return res.redirect("/products");
    },
    delete: function (req, res){
        Products.destroy(req.params.id);
        return res.redirect("/products");
    }
}

module.exports = productsController;