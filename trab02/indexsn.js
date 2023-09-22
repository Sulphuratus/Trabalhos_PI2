// indexsn.js

const express = require('express');
const app = express();
const port = 5000;
const sobreNatural = require('./src/bd_sn.js');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', sobreNatural);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});
