const User = require('../models/user.model');

const authController = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        console.log(user);
        res.json(user);
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = { authController };