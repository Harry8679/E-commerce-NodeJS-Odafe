const express = require('express');
const { product } = require('../controller/product.controller');
const router = express.Router();

router.get('/', product);

module.exports = router;