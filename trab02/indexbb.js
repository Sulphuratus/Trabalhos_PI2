// indexbb.js

const express = require('express');
const app = express();
const port = 4000;
const bigBangTheory = require('./src/bd_bbt.js');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', bigBangTheory);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});
