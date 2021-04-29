const db = require("../models");
// const sequelize = db.sequelize;
const Product = require("../models/product");
const Products = db.Product;

const productsController = {
  index: async function (req, res) {
    let productos = await Products.findAll();
    let isAdmin = req.session.isAdmin || req.session.isOwner;
    res.render("products/products", { productos: productos, isAdmin });
  },
  detail: async function (req, res) {
    let prodId = req.params.id;
    let producto = await Products.findByPk(prodId);
    let isAdmin = req.session.isAdmin || req.session.isOwner;
    res.render("products/productDetail", { product: producto, isAdmin });
  },
  create: function (req, res) {
    res.render("products/productCreate",{css: 'productCreate-Edit.css'});
  },
  upload: async function (req, res) {
    let product = req.body;
    console.log("product create (upload): ");
    console.log(product);
    console.log(product.image);
    if(product.image == ""){
        //TODO: check null dummy image
        product.image = "brooke-lark-unsplash.jpg";
    }
    try{
        await Products.create(product);
    } catch(error){
        console.error("Product create error: " + error);
        return res.send("Error uploading product: " + error);
    }
    return res.redirect("/products");
  },
  edit: async function (req, res) {
    let producto = await Products.findByPk(req.params.id);
    return res.render("products/productEdit", { producto: producto });
  },
  update: async function (req, res) {
    console.log("update 1");
    let product = req.body;
    product["id"] = req.params.id;
    console.log("update 2");
    console.log(product);
    console.log("update 3");
    console.log(product.id);
    try {
      await Products.update(
        product,
        {
          where: {
            id: product.id,
          },
        }
      );
      console.log("update 2");
    } catch (error) {
      console.log("Product update error: " + error);
    }

    return res.redirect("/products");
  },
  delete: function (req, res) {
    Products.destroy({
        where: {
            id: req.params.id
        }
    });
    return res.redirect("/products");
  },
};

module.exports = productsController;
