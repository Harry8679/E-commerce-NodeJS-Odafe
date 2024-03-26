const { validationResult } = require('express-validator');

const home = (req, res) => {
    res.send('Hello from Controller');
}

const postUser = (req, res) => {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('User Post Route');
}

module.exports = { home, postUser };