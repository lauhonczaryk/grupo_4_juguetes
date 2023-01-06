const express = require('express');
const router = express.Router();
const apiUserController = require('../../controllers/api/userApi')


//Rutas de APIs Usuarios

router.get('/', apiUserController.list);
router.get('/:id', apiUserController.detail);


module.exports = router;