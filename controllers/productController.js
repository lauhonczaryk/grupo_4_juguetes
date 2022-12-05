
const fs = require('fs');
const path = require('path');
const db = require('../database/models')


const productController = {
    options: function (req, res) {
        res.render('product-options');
    },
    list: async function (req, res) {
        const products = await db.Products.findAll()
        res.render('menu-products', { products });
    },
    detail: async function (req, res) {
        const productoEncontrado = await db.Products.findByPk(req.params.id)
        res.render('product-detail', { products: productoEncontrado });
    },
    crear: function (req, res) {
        res.render('create');
    },
    store: function (req, res) {
        db.Products.create({
            name: req.body.name,
            price: req.body.price,
            category_id: req.body.category_id,
            description: req.body.description,
            image: req.file.filename,
        })
            .then(() => {
                res.redirect('/productos/listar')
            })
    },
    edit: async function (req, res) {
        const producto = await db.Products.findByPk(req.params.id)
        res.render('edit', { producto: producto });
    },
    update: function (req, res) {
        db.Products.update({
            name: req.body.name,
            price: req.body.price,
            category_id: req.body.category_id,
            description: req.body.description,
            image: req.file.filename,
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/productos/listar");
    },

    destroy: function (req, res) {
        db.Products.destroy({
            where: { id: req.params.id }
        })

    }
}

module.exports = productController;

//CÓDIGO ANTERIOR CON JSON
/*
function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/productDataBase.json"));
    const data = JSON.parse(jsonData);
    return data;
}

//Fucncion para pasar data a JSON y mandarla al .JSON

function writeFile(data) {
    const dataString = JSON.stringify(data, null, 5);
    fs.writeFileSync(path.join(__dirname, "../data/productDataBase.json"), dataString);
}
const productController = {
    options: function (req, res) {
        res.render('product-options');
    },
    crear: function (req, res) {
        res.render('create');
    },
    list: function (req, res) {
         const data = findAll()
          res.render('menu-products', { products: data});  
    },
    detail: function (req, res) {
        
        const data = findAll();
        const productoEncontrado = data.find(function (producto) {
            return producto.id == req.params.id
        });
        res.render('product-detail', { products: productoEncontrado });
    },
    store: function (req, res) {
     const data = findAll()
        console.log(req.file);
        const newProduct = {
            id: data.length + 1, //Cuenta cuantos elementos hay en la lista y le suma 1
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            color: req.body.color,
            image: req.file.filename, // dentro de la propiedad .file nos llega los datos del archivo que subimos
        }
        data.push(newProduct); //Le agrego el nuevo product al data
        writeFile(data);

        res.redirect("/productos/listar");
    },
    edit: function (req, res) {
        const data = findAll();
        const productoEncontrado = data.find(function (producto) {
            return producto.id == req.params.id
        });

        res.render("edit", { producto: productoEncontrado });
    
        
    },
    update: function (req, res){
       
     
        const data = findAll();
        const productoEncontrado = data.find(function (producto) {
            return producto.id == req.params.id
        });

        productoEncontrado.name = req.body.name;
        productoEncontrado.price = req.body.price;
        productoEncontrado.description = req.body.description;
        productoEncontrado.category = req.body.category;
        productoEncontrado.color = req.body.color;
        writeFile(data);


        res.redirect("/productos/listar");

    destroy: function(req, res) {
        const data = findAll();
        const productoEncontrado = data.findIndex(function (producto) { //El findindex de devueve en que indice del elemento del array donde esta 
            return producto.id == req.params.id
        });
        data.splice(productoEncontrado, 1);
        writeFile(data);

        res.redirect("/productos/listar");

    }
}

module.exports = productController;*/