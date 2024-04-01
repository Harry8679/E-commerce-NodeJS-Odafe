const express = require('express');
const { authController } = require('../controllers/auth.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/authorization.middleware');

router.get('/', authMiddleware, authController);
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Please password should at least 5 characters').isLength({ min: 5 }),
], postUser);

module.exports = router;