const fs = require("fs");
const filePath = "./data/products.json";

module.exports = {
  findAll: function () {
    let productosFile = fs.readFileSync(filePath);
    let productos = JSON.parse(productosFile);
    return productos;
  },
  findByPk: function (productId) {
    let productosFile = fs.readFileSync(filePath);
    let productos = JSON.parse(productosFile);
    let producto = productos.find((item) => {
      return item.id == productId;
    });
    return producto;
  },
  create: function (product) {
    let productosFile = fs.readFileSync(filePath);
    let productos = JSON.parse(productosFile);
    productos.push(product);
    productos = JSON.stringify(productos);
    fs.writeFileSync(filePath, productos);
  },
  update: function (product) {
    console.dir(product);

    let productosFile = fs.readFileSync(filePath);
    let productos = JSON.parse(productosFile);
    let indexFound = productos.findIndex(function(prod) {
      return prod.id == product.id;
    });
    if (indexFound >= 0) {
      productos[indexFound] = product;
    }
    productos = JSON.stringify(productos);
    fs.writeFileSync(filePath, productos);
  },
  destroy: function (id) {
      console.log("Destroy id: " + id);
    let productosFile = fs.readFileSync(filePath);
    let productos = JSON.parse(productosFile);
    let indexFound = productos.findIndex(function(prod) {
      return prod.id == id;
    });
    if (indexFound >= 0) {
      productos.splice(indexFound, 1);
    }
    productos = JSON.stringify(productos);
    fs.writeFileSync(filePath, productos);
  }
};
