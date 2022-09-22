
const fs = require('fs');
const path = require('path');

//Funcion para buscar dentro del JSON los productos y mostrarlo en formato Java Script

function findAll(){
const jsonData = fs.readFileSync(path.join(__dirname,"../data/productDataBase.json"));
const data = JSON.parse(jsonData);
return data;
}

//Fucncion para pasar data a JSON y mandarla al .JSON

function writeFile(data){
    const dataString = JSON.stringify(data, null, 5);
    fs.writeFileSync(path.join(__dirname,"../data/productDataBase.json"), dataString);
}

const productController = {
    crear: function (req, res) {
        res.render('create');
    },
    list: function (req, res) {
        const data = findAll()
        res.render('menu-products', { products: data}); // dentro de la ruta mando un objeto "products" con data adentro
    },
    detail: function (req, res) {
        const data = findAll();
        const productoEncontrado = data.find(function(producto) {
           return producto.id == req.params.id
        });
        res.render('product-detail', { products: productoEncontrado });
    },
    store: function (req, res){
        const data = findAll()
        
        const newProduct = {
            id: data.length + 1, //Cuenta cuantos elementos hay en la lista y le suma 1
            name: req.body.name,
            price: req.body.price, 
            category: req.body.category,
            description: req.body.description,
        }
         data.push(newProduct); //Le agrego el nuevo product al data
        writeFile(data);

        res.redirect("/productos/listar");

        
    },
    edit: function (req, res){
        const data = findAll();
        const productoEncontrado = data.find(function(producto) {
           return producto.id == req.params.id
        });

        res.render("edit",{ producto: productoEncontrado});
    },
    update: function (req, res){
        const data = findAll();
        const productoEncontrado = data.find(function(producto) {
           return producto.id == req.params.id
        });
        
        productoEncontrado.name = req.body.name;
        productoEncontrado. price = req.body.price;
        productoEncontrado. description = req.body.description;
        productoEncontrado. category = req.body.category;
        writeFile(data);
       

        res.redirect("/productos/listar");
    },
    destroy: function (req, res){
        const data = findAll();
        const productoEncontrado = data.findIndex(function(producto) { //El findindex de devueve en que indice del elemento del array donde esta 
           return producto.id == req.params.id
        });
        data.splice(productoEncontrado,1);
        writeFile(data);

        res.redirect("/productos/listar");

    }
}

module.exports = productController;