const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');

connectDB();

dotenv.config();

const port = process.env.PORT || 5800;

app.get('/', (req, res) => {
    res.send('My app is up');$
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});