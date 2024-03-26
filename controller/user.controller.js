const { validationResult } = require('express-validator');

const home = (req, res) => {
    res.send('Hello from Controller');
}

const postUser = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    return res.send('User Post Route Test');
}

module.exports = { home, postUser };