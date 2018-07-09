const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');

const url = 'mongodb://localhost/blogDb';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/user/login', (req, res) => {
    mongoose.connect(url, err => {
        if (err) throw err;
        console.log('connection successful, username is ' + req.body.username + ', password is ' + req.body.password);
    })
})

app.listen(3000, () => console.log('blog server running on port 3000'));