const productsController = {
    index: (req, res) => {
        res.render('products/products');
    },
    detail: function(req, res){
        let prodId = req.params.id;
        res.render('products/productDetail',{productId: prodId});
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