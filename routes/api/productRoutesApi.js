const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/api/productApi')
router.get('/random', apiProductController.random);
router.get('/last', apiProductController.last);
router.get('/', apiProductController.list);
router.get('/:id', apiProductController.detail);



module.exports = router;