const express = require('express');

require('dotenv').config();
const path = require('path');
const app = express();

const urlRoutes = require('./routes/users');

app.use(express.json())

const port = process.env.PORT || 8000;

app.use(urlRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
    console.log(`Running on port : ${port}`)
})