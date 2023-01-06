//const fs = require('fs');
const path = require('path');
const db = require('../../database/models')
const Op = db.Sequelize.Op;

const apiUserController = {

    list:  (req,res) => {
        db.User.findAll()
        .then (users => { 
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }
        res.json(respuesta);
        //console.log(respuesta)
        })
        },

    detail: (req,res) => { 
        db.User.findOne({
            where: {
                id: req.params.id,
            }
        })
        .then (users => { 
        let respuesta = {
            meta: {
                status : 200,
                total: users.length,
                url: 'api/users/:id'
            },
            data: users
        }
    res.json(respuesta);
    //console.log(respuesta)
    })}
    
}



module.exports = apiUserController;




