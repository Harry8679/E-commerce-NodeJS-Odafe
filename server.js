const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 5800;

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});