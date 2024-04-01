const express = require('express');
const { authController, login } = require('../controllers/auth.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/authorization.middleware');
const { check } = require('express-validator');

router.get('/', authMiddleware, authController);
router.post('/login', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please is required').exists(),
], login);

module.exports = router;