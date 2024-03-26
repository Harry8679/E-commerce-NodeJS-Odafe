const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {})
            .then(() => console.log('DB Connected'))
            .catch((err) => console.log('DB Error => ', err));
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;