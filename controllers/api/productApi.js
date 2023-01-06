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
    })}
    
}



module.exports = apiProductController;

