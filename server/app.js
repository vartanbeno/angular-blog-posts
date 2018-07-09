const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');

const url = 'mongodb://localhost/blogDb';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.post('/api/user/login', (req, res) => {
//     mongoose.connect(url, err => {
//         if (err) throw err;
//         console.log('connection successful, username is ' + req.body.username + ', password is ' + req.body.password);
//     })
// })

app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, err => {
        if (err) throw err;
        User.find({
            username: req.body.username, password: req.body.password
        }, (err, user) => {
            if (err) throw err;
            if (user.length === 1) {
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            }
            else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'login failed'
                })
            }
        })
    })
})

app.listen(3000, () => console.log('blog server running on port 3000'));