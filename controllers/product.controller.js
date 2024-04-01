const Product = require('../models/product.model');
const { validationResult } = require('express-validator');

const product = (req, res) => {
    res.send('Home Page Product');
};

/* ------------- Creat a new Product ------------- */
const create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        console.log(req.body);
        console.log(res.user);
        const { name, description, category, price, brand, quantity } = req.body;

        const newProduct = new Product({ userId: req.user.id, name, description, category, price, brand, quantity });
        const product = await newProduct.save();
        res.send({ product });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

/* ------------- Get All Products ------------- */
const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

/* ------------- Get a Product By Id ------------- */
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(400).json({ msg: 'Product was not found' });
        }

        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = { product, create, getAll, getProduct };