const express = require('express');
const { home, postUser } = require('../controller/user.controller');
const router = express.Router();
const { check } = require('express-validator');

router.get('/', 
[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Please password should at least 5 characters').isLength({ min: 5 }),
], home);

router.post('/', postUser);

module.exports = router;