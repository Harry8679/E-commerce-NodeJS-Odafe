const express = require('express');
const { home } = require('../controller/user.controller');
const router = express.Router();

router.get('/', home);

module.exports = router;