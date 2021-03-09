const productCreateController = {
    index: function (req, res) {
        res.render("products/productCreate", {css: 'productCreate-Edit.css'});
    }
}

module.exports = productCreateController;