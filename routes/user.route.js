const express = require('express');
const { home, postUser } = require('../controller/user.controller');
const router = express.Router();

router.get('/', home);

router.post('/', postUser);

module.exports = router;