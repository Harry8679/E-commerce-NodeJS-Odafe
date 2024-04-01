const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.route');
const productRoutes = require('./routes/product.route');
const authRoutes = require('./routes/auth.route');

connectDB();

dotenv.config();

app.use(express.json());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/auth', authRoutes);

const port = process.env.PORT || 5800;

app.get('/', (req, res) => {
    res.send('My app is up');$
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});