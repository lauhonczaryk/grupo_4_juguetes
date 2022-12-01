const db = require("../database/models");
const sequelize = db.sequelize;
const productsController = {
    list: async function (req, res) {
        const products = await db.Products.findAll()
        res.render('menu-products', { products });
    },

    detail: async function (req, res) {
        const productoEncontrado = await db.Products.findByPk(req.params.id)
        res.render('product-detail', { products: productoEncontrado });
    },
    create: function (req, res) {
        db.Products.create({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            image: req.file.filename,
        })
            .then(() => {
                res.redirect('/productos/listar')
            })
    }
}
module.exports = productsController