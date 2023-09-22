// index.js

const express = require('express');
const app = express();
const port = 3000;
const strangerThings = require('./src/bd_st.js');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', strangerThings);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});
