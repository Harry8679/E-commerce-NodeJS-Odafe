const express = require('express');
const { product } = require('../controllers/product.controller');
const router = express.Router();

router.get('/', product);

module.exports = router;