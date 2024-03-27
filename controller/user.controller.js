const User = require('../models/user.model');
const { validationResult } = require('express-validator');

const home = (req, res) => {
    res.send('Hello from Controller');
}

const postUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    
    try {
        let user = await User.findOne({ email });

        if (user) {
            console.log(user);
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        user = new User({ name, email, password });
        user.save();
        
        res.send('User created successfully');
    } catch(error) {
        console.log(error);
    }
}

module.exports = { home, postUser };