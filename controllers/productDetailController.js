const productDetailController = {
    index: (req, res) => {
        let id = req.query.id;
        res.render('products/productDetail',{productId: id});
    }
}

module.exports = productDetailController;