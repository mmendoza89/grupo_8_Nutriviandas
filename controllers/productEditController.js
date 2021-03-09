const productEditController = {
    index: function (req, res) {
        res.render("products/productEdit", {css: 'productCreate-Edit.css'});
    }
}

module.exports = productEditController;