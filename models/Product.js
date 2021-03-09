const fs = require('fs');
const filePath = './data/products.json'

module.exports = {
    findAll: function(){
        let productosFile = fs.readFileSync(filePath);
        let productos = JSON.parse(productosFile);
        return productos;
    },
    findByPk: function(productId){
        let productosFile = fs.readFileSync(filePath);
        let productos = JSON.parse(productosFile);
        let producto = productos.find(
            (item) => {
                return item.id == productId;
            }
        )
        return producto;
    }
}