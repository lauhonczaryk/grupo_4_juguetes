
const fs = require('fs');
const path = require('path');

//Funcion para buscar dentro del JSON los productos y mostrarlo en formato Java Script

function findAll(){
const jsonData = fs.readFileSync(path.join(__dirname,"../data/productDataBase.json"));
const data = JSON.parse(jsonData);
return data;
}


const productController = {
    crear: function (req, res) {
        res.render('create');
    },
    list: function (req, res) {
        const data = findAll()
        res.render('menu-products', { products: data}); // dentro de la ruta mando un objeto "products" con data adentro
    }
}

module.exports = productController;