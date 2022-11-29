const db = require("../database/models");
const sequelize = db.sequelize;
const productsController = {
    list: function (req, res) {
        db.Products.findAll()
            .then(function (products) {
                console.log(products)
                res.render('menu-products', { products });
            })
        }
}
module.exports = productsController