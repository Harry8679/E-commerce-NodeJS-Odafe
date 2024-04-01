const express = require('express');
const { authController } = require('../controllers/auth.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/authorization.middleware');

router.get('/', authMiddleware, authController);

module.exports = router;