const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const authController = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        console.log(user);
        res.json(user);
    } catch (err) {
        console.error(err.message);
    }
}

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    
    try {
        let user = await User.findOne({ email });

        if (!user) {
            console.log(user);
            return res.status(400).json({ errors: [{ msg: 'Invalid username or password' }] });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ errors: [{ msg: 'Invalid username or password' }] });
        }

        const payload = {
            user: {
                id: user.id,
            }
        };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 * 24 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch(error) {
        console.log(error);
    }
}

module.exports = { authController, login };