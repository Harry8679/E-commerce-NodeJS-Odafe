const express = require('express');
const { home, postUser } = require('../controller/user.controller');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', home);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Please password should at least 5 characters').isLength({ min: 5 }),
], postUser);


module.exports = router;