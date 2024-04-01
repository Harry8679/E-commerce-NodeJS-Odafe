const express = require('express');
const { product, create } = require('../controllers/product.controller');
const authMiddleware = require('../middlewares/authorization.middleware');
const { check } = require('express-validator');
const router = express.Router();

router.get('/', product);
router.post('/', [
    authMiddleware,
    [
        check('name', 'Name is required').not().isEmpty(),
        check('description', 'Description is required').not().isEmpty(),
        check('category', 'Category is required').not().isEmpty(),
        check('price', 'Price is required').not().isEmpty(),
        check('quantity', 'Quantity is required').not().isEmpty(),
    ]
], create);

module.exports = router;