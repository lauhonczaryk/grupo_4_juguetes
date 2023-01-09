//const fs = require('fs');
const path = require('path');
const db = require('../../database/models')
const Op = db.Sequelize.Op;

const apiProductController = {

    list:  (req,res) => {
        db.Products.findAll()
        .then (products => { 
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/users'
                },
                data: products
            }
        res.json(respuesta);
        //console.log(respuesta)
        })
        },

    detail: (req,res) => { 
        db.Products.findOne({
            where: {
                id: req.params.id,
            }
        })
        .then (products => { 
        let respuesta = {
            meta: {
                status : 200,
                total: products.length,
                url: 'api/users/:id'
            },
            data: products
        }
    res.json(respuesta);
   // console.log(respuesta)
    })},
    last:  (req,res) => {
        db.Products.findAll()
        .then (products => { 
            lastProduct = products.pop();
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/users'
                },
                data: lastProduct
            }
        res.json(respuesta);
        //console.log(respuesta)
        })
        },

    random:  (req,res) => {
            db.Products.findAll()
            .then (products => { 
                
                function getRandomItem(arr) {
                    // get random index value
                    const randomIndex = Math.floor(Math.random() * arr.length);
                    // get random item
                    const item = arr[randomIndex];
                    return item;
                }

                const productRandom = getRandomItem(products);
                console.log(productRandom);

                let respuesta = {
                    meta: {
                        status : 200,
                        total: products.length,
                        url: 'api/users'
                    },
                    data: productRandom
                }
            res.json(respuesta);
            //console.log(respuesta)
            })
            }    
    
}



module.exports = apiProductController;

