//rotas.js

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'imagens')));
//app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'imagens/Platy.jpg'));
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about_index.html'));
});

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/user_index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login_index.html'));
});


app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'public/error.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
    });
